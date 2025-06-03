'use client'

import { Dialog, DialogBackdrop, DialogPanel, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
import { XMarkIcon, ChevronDownIcon, FunnelIcon } from "@heroicons/react/24/outline"
import { useCallback, useEffect, useMemo, useState } from "react"
import { TripGridItem } from "./TripGridItem"
import { classNames } from "../_utils/classNames"
import { TypePaquete } from "../_types/contentful/Paquete"
import ComboBox from "./Inputs/ComboBox"
import { ComboBoxOption } from "../_types/input/ComboBoxOption"
import { useSearchParams } from "next/navigation"

const sortOptions = [
    { name: 'Reciente' },
    { name: 'Precio - Menor a Mayor' },
    { name: 'Precio - Mayor a Menor' },
    { name: 'Días - Menor a Mayor' },
    { name: 'Días - Mayor a Menor' },
]

const generateFilters = (trips: TypePaquete[]) => {
    const paises = trips.flatMap((trip) => trip.fields.paises.map((pais) => pais.fields?.nombre ?? ""));
    const paisesUnicos = Array.from(new Set(paises));
    const ciudades = trips.flatMap((trip) => trip.fields.ciudades.map((ciudad) => ciudad.fields?.nombre ?? ""));
    const ciudadesUnicas = Array.from(new Set(ciudades));
    const duraciones = trips.map((trip) => trip.fields.dias);
    const duracionMinima = Math.min(...duraciones);
    const duracionMaxima = Math.max(...duraciones);
    const precios = trips.map((trip) => trip.fields.precio);
    const precioMinimo = Math.min(...precios);
    const precioMaximo = Math.max(...precios);

    return {
        paises: paisesUnicos.map((pais) => ({ id: pais, label: pais })),
        ciudades: ciudadesUnicas.map((ciudad) => ({ id: ciudad, label: ciudad })),
        duracion: [duracionMinima, duracionMaxima],
        precio: [precioMinimo, precioMaximo],
    }
}

export const TripGrid = ({ header, trips }: Readonly<{ header: string, trips: TypePaquete[] }>) => {
    const searchParams = useSearchParams();
    const countryParam = searchParams.get('pais');
    const cityParam = searchParams.get('ciudad');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filteredTrips, setFilteredTrips] = useState(trips);
    const [order, setOrder] = useState('Reciente');
    const [country, setCountry] = useState<ComboBoxOption[]>([]);
    const [city, setCity] = useState<ComboBoxOption[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);
    const paginatedTrips = filteredTrips.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const filters = useMemo(() => generateFilters(trips), [trips]);

    const orderBy = useCallback((tripsArray: TypePaquete[], orderValue: string = order) => {
        const tripsArrayCopy = [...tripsArray];
        switch (orderValue) {
            case 'Precio - Menor a Mayor':
                tripsArrayCopy.sort((a, b) => {
                    if (a.fields.precio === b.fields.precio) return 0;
                    return a.fields.precio < b.fields.precio ? -1 : 1;
                });
                break;
            case 'Precio - Mayor a Menor':
                tripsArrayCopy.sort((a, b) => {
                    if (a.fields.precio === b.fields.precio) return 0;
                    return a.fields.precio > b.fields.precio ? -1 : 1;
                });
                break;
            case 'Días - Menor a Mayor':
                tripsArrayCopy.sort((a, b) => {
                    if (a.fields.dias === b.fields.dias) return 0;
                    return a.fields.dias < b.fields.dias ? -1 : 1;
                });
                break;
            case 'Días - Mayor a Menor':
                tripsArrayCopy.sort((a, b) => {
                    if (a.fields.dias === b.fields.dias) return 0;
                    return a.fields.dias > b.fields.dias ? -1 : 1;
                });
                break;
            default:
                tripsArrayCopy.sort((a, b) => {
                    if (a.sys.updatedAt === b.sys.updatedAt) return 0;
                    return new Date(a.sys.updatedAt) > new Date(b.sys.updatedAt) ? -1 : 1;
                });
                break;
        }
        setOrder(orderValue);
        setFilteredTrips(tripsArrayCopy);
    }, [order]);

    useEffect(() => {
        if (countryParam) {
            const selectedCountries = countryParam.split(',').map((pais) => ({ id: pais, label: pais }));
            setCountry(selectedCountries);
        }
    }, [countryParam]);

    useEffect(() => {
        if (cityParam) {
            const selectedCities = cityParam.split(',').map((ciudad) => ({ id: ciudad, label: ciudad }));
            setCity(selectedCities);
        }
    }, [cityParam]);

    useEffect(() => {
        let filtered = trips;
        filtered = filtered.filter((trip) => country.length === 0 || country.some((option) => trip.fields.paises.some((pais) => pais.fields.nombre === option.id)));
        filtered = filtered.filter((trip) => city.length === 0 || city.some((option) => trip.fields.ciudades.some((ciudad) => ciudad.fields?.nombre === option.id)));
        orderBy(filtered);
    }, [country, city, trips, orderBy]);

    useEffect(() => {
        setCurrentPage(1);
    }, [country, city, order]);

    return (
        <div>
            {/* Mobile filter dialog */}
            <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                    >
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(false)}
                                className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        {/* Filters */}
                        <form className="mt-4 border-t border-gray-200">
                            <div className="space-y-8 p-4">
                                <ComboBox name="pais" label="Paises" options={filters.paises} value={country} onChange={setCountry} multiple={true} />
                                <ComboBox name="ciudad" label="Ciudades" options={filters.ciudades} value={city} onChange={setCity} multiple={true} />
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row items-baseline justify-between border-b border-gray-200 py-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">{header}</h1>
                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="group inline-flex justify-center text-sm font-medium cursor-pointer text-gray-700 hover:text-gray-900">
                                    Ordenar: {order}
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                    />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md cursor-pointer bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
                            >
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            <span
                                                onClick={() => orderBy(filteredTrips, option.name)}
                                                className={classNames(
                                                    option.name === order ? 'font-medium text-gray-900' : 'text-gray-500',
                                                    'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-none',
                                                )}
                                            >
                                                {option.name}
                                            </span>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>

                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(true)}
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6"
                        >
                            <span className="sr-only">Filtros</span>
                            <FunnelIcon aria-hidden="true" className="size-5 cursor-pointer" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="trips-heading" className="pb-24 pt-6">
                    <h2 id="trips-heading" className="sr-only">
                        Paquetes
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div className="lg:col-span-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {paginatedTrips.length > 0 ? (
                                paginatedTrips.map((trip) => <TripGridItem key={trip.fields.id} trip={trip} />)
                            ) : (
                                <div className="col-span-full text-center text-gray-500 py-12">No hay paquetes que coincidan con los filtros seleccionados.</div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <nav className="flex justify-center mt-10" aria-label="Paginación">
                            <ul className="flex items-center gap-1">
                                <li>
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="flex items-center justify-center size-10 cursor-pointer rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-sky-100 hover:text-sky-700 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                                        aria-label="Página anterior"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, i) => {
                                    // Mostrar siempre la primera, la última, la actual y las adyacentes
                                    if (
                                        i === 0 ||
                                        i === totalPages - 1 ||
                                        Math.abs(i + 1 - currentPage) <= 1
                                    ) {
                                        return (
                                            <li key={i + 1}>
                                                <button
                                                    onClick={() => setCurrentPage(i + 1)}
                                                    className={`flex items-center justify-center size-10 cursor-pointer rounded-full border border-gray-200 transition font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 ${currentPage === i + 1 ? 'bg-sky-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-sky-100 hover:text-sky-700'}`}
                                                    aria-current={currentPage === i + 1 ? 'page' : undefined}
                                                >
                                                    {i + 1}
                                                </button>
                                            </li>
                                        );
                                    }
                                    // Mostrar puntos suspensivos solo una vez entre saltos
                                    if (
                                        (i === 1 && currentPage > 3) ||
                                        (i === totalPages - 2 && currentPage < totalPages - 2)
                                    ) {
                                        return (
                                            <li key={`ellipsis-${i}`} className="w-10 h-10 flex items-center justify-center text-gray-400 text-xl select-none">…</li>
                                        );
                                    }
                                    return null;
                                })}
                                <li>
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="flex items-center justify-center size-10 cursor-pointer rounded-full border border-gray-200 bg-white text-gray-400 hover:bg-sky-100 hover:text-sky-700 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                                        aria-label="Página siguiente"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )}
                </section>
            </main>
        </div>
    )
}