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
            <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-[60]">
                <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-linear data-closed:opacity-0" />

                <div className="fixed inset-0 z-[60] flex justify-end">
                    <DialogPanel className="relative flex h-full w-full max-w-sm transform flex-col overflow-y-auto bg-white shadow-2xl transition duration-300 ease-in-out data-closed:translate-x-full">
                        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-4">
                            <h2 className="text-lg font-semibold text-gray-900">Filtros de búsqueda</h2>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(false)}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                aria-label="Cerrar filtros"
                            >
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        <form className="flex-1">
                            <div className="space-y-6 p-4">
                                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                                    <p className="text-sm text-primary-800">
                                        💡 <strong>Tip:</strong> Usa los filtros para encontrar el paquete perfecto para tu viaje.
                                    </p>
                                </div>
                                
                                <ComboBox 
                                    name="pais" 
                                    label="Países" 
                                    options={filters.paises} 
                                    value={country} 
                                    onChange={setCountry} 
                                    multiple={true} 
                                />
                                
                                <ComboBox 
                                    name="ciudad" 
                                    label="Ciudades" 
                                    options={filters.ciudades} 
                                    value={city} 
                                    onChange={setCity} 
                                    multiple={true} 
                                />

                                {/* Clear filters button */}
                                {(country.length > 0 || city.length > 0) && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setCountry([]);
                                            setCity([]);
                                        }}
                                        className="w-full px-4 py-2 text-sm font-medium text-neutral-700 bg-neutral-100 border border-neutral-300 rounded-lg hover:bg-neutral-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    >
                                        Limpiar todos los filtros
                                    </button>
                                )}
                            </div>
                            
                            <div className="border-t border-neutral-200 bg-neutral-50 px-4 py-4">
                                <div className="text-center">
                                    <p className="text-sm text-neutral-600 mb-3">
                                        {filteredTrips.length} paquetes encontrados
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setMobileFiltersOpen(false)}
                                        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-4 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Ver paquetes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Filters and Sorting Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold text-gray-900">{header}</h2>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                            {filteredTrips.length} paquetes
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        {/* Sort Menu */}
                        <Menu as="div" className="relative">
                            <MenuButton className="group inline-flex items-center justify-between text-sm font-medium cursor-pointer text-gray-700 hover:text-gray-900 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                    </svg>
                                    Ordenar: {order}
                                </span>
                                <ChevronDownIcon className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500 transition-colors duration-200 ml-2" />
                            </MenuButton>
                            
                            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg cursor-pointer bg-white shadow-xl ring-1 ring-black/5 border border-gray-100 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75 data-enter:ease-out data-leave:ease-in">
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            <span
                                                onClick={() => orderBy(filteredTrips, option.name)}
                                                className={classNames(
                                                    option.name === order ? 'font-medium text-sky-700 bg-sky-50' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 cursor-pointer',
                                                )}
                                            >
                                                {option.name}
                                            </span>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>

                        {/* Mobile Filters Button */}
                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(true)}
                            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-sm"
                            aria-label="Abrir filtros"
                        >
                            <FunnelIcon className="h-5 w-5" />
                            Filtros
                        </button>
                    </div>
                </div>

                <section aria-labelledby="trips-heading" className="pb-24 pt-6">
                    <h2 id="trips-heading" className="sr-only">
                        Paquetes
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div className="lg:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {paginatedTrips.length > 0 ? (
                                paginatedTrips.map((trip, index) => (
                                    <TripGridItem 
                                        key={trip.fields.id} 
                                        trip={trip} 
                                        priority={index < 6}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full text-center py-16">
                                    <div className="max-w-sm mx-auto">
                                        <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron paquetes</h3>
                                        <p className="text-gray-600 mb-4">No hay paquetes que coincidan con los filtros seleccionados.</p>
                                        <button 
                                            onClick={() => {
                                                setCountry([]);
                                                setCity([]);
                                            }}
                                            className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors duration-200"
                                        >
                                            Limpiar filtros
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="border-t border-gray-200 pt-8">
                            <nav className="flex flex-col items-center gap-4" aria-label="Paginación de resultados">
                                <p className="text-sm text-gray-700">
                                    Mostrando{' '}
                                    <span className="font-semibold">{(currentPage - 1) * itemsPerPage + 1}</span>
                                    {' '}-{' '}
                                    <span className="font-semibold">
                                        {Math.min(currentPage * itemsPerPage, filteredTrips.length)}
                                    </span>
                                    {' '}de{' '}
                                    <span className="font-semibold">{filteredTrips.length}</span>
                                    {' '}paquetes
                                </p>
                                
                                <ul className="flex items-center gap-2">
                                    <li>
                                        <button
                                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                            disabled={currentPage === 1}
                                            className="flex items-center justify-center h-10 px-4 cursor-pointer rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                            aria-label="Página anterior"
                                        >
                                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                            Anterior
                                        </button>
                                    </li>
                                    
                                    {Array.from({ length: totalPages }, (_, i) => {
                                        if (
                                            i === 0 ||
                                            i === totalPages - 1 ||
                                            Math.abs(i + 1 - currentPage) <= 1
                                        ) {
                                            return (
                                                <li key={i + 1}>
                                                    <button
                                                        onClick={() => setCurrentPage(i + 1)}
                                                        className={`flex items-center justify-center h-10 px-4 cursor-pointer rounded-lg border transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                                                            currentPage === i + 1 
                                                                ? 'bg-sky-600 text-white border-sky-600 shadow-md hover:bg-sky-700' 
                                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                                                        }`}
                                                        aria-current={currentPage === i + 1 ? 'page' : undefined}
                                                        aria-label={`Página ${i + 1}`}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                </li>
                                            );
                                        }
                                        if (
                                            (i === 1 && currentPage > 3) ||
                                            (i === totalPages - 2 && currentPage < totalPages - 2)
                                        ) {
                                            return (
                                                <li key={`ellipsis-${i}`} className="w-10 h-10 flex items-center justify-center text-gray-400 text-xl select-none" aria-hidden="true">
                                                    …
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                    
                                    <li>
                                        <button
                                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                            disabled={currentPage === totalPages}
                                            className="flex items-center justify-center h-10 px-4 cursor-pointer rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                            aria-label="Página siguiente"
                                        >
                                            Siguiente
                                            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}