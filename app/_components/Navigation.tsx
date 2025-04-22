'use client';

import { PopoverGroup, Popover, PopoverButton, PopoverPanel, Dialog, DialogBackdrop, DialogPanel, CloseButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { DollarPrice } from "./DollarPrice";
import { TypeNavegacion } from "../_types/contentful/Navegacion";
import Image from "next/image";
import AliworldLogo from '../../public/aliworld-color.svg';

interface NavigationProps {
    navigationData?: TypeNavegacion;
}

export const Navigation = ({ navigationData }: NavigationProps) => {
    const [open, setOpen] = useState(false);

    const navigation = {
        categories: [
            {
                id: 'paquetes',
                name: 'Paquetes',
                href: '/paquetes',
                featured: [
                    {
                        name: 'Promociones',
                        href: '/promociones',
                        imageSrc: `https:${navigationData?.fields.promocion?.fields?.file?.url}`,
                        imageAlt: navigationData?.fields.promocion.fields?.description,
                    },
                    {
                        name: 'Favoritos',
                        href: '/favoritos',
                        imageSrc: `https:${navigationData?.fields.favorito?.fields?.file?.url}`,
                        imageAlt: navigationData?.fields.favorito.fields?.description,
                    },
                ],
                sections: [
                    {
                        id: 'destinos',
                        name: 'Destinos',
                        items: [
                            { name: 'Europa', href: '/paquetes/europa' },
                            { name: 'Asia', href: '/paquetes/asia' },
                            { name: 'Caribe', href: '/paquetes/caribe' },
                            { name: 'África', href: '/paquetes/africa' },
                            { name: 'México', href: '/paquetes/mexico' },
                            { name: 'Sudamérica', href: '/paquetes/sudamerica' },
                            { name: 'Centroamérica', href: '/paquetes/centroamerica' },
                            { name: 'Medio Oriente', href: '/paquetes/medio-oriente' },
                            { name: 'Estados Unidos', href: '/paquetes/estados-unidos' },
                            { name: 'Canadá', href: '/paquetes/canada' },
                            { name: 'Pacífico', href: '/paquetes/pacifico' },
                            { name: 'Cruceros', href: '/paquetes/cruceros' },
                            { name: 'Ver todos', href: '/paquetes' },
                        ],
                    },
                    {
                        id: 'paises',
                        name: 'Paises',
                        items: [
                            { name: 'Francia', href: '/paquetes/europa?pais=Francia' },
                            { name: 'Japón', href: '/paquetes/asia?pais=Japon' },
                            { name: 'España', href: '/paquetes/europa?pais=España' },
                            { name: 'Belgica', href: '/paquetes/europa?pais=Belgica' },
                            { name: 'Italia', href: '/paquetes/europa?pais=Italia' },
                            { name: 'Inglaterra', href: '/paquetes/europa?pais=Inglaterra' },
                        ],
                    },
                    {
                        id: 'ciudades',
                        name: 'Ciudades',
                        items: [
                            { name: 'París', href: '/paquetes/europa?ciudad=París' },
                            { name: 'Tokio', href: '/paquetes/asia?ciudad=Tokio' },
                            { name: 'Madrid', href: '/paquetes/europa?ciudad=Madrid' },
                            { name: 'Amsterdam', href: '/paquetes/europa?ciudad=Ámsterdam' },
                            { name: 'Londres', href: '/paquetes/europa?ciudad=Londres' },
                            { name: 'Cancún', href: '/paquetes/europa?ciudad=Cancún' },
                        ],
                    },
                ],
            },
        ],
        pages: [
            { name: 'Hoteles', href: 'https://reservas.aliworld.mx' },
            { name: 'Vuelos', href: 'https://reservas.aliworld.mx' },
            { name: 'Actividades', href: '/actividades' },
            { name: 'Blog', href: '/blog' },
            { name: 'Guías de Ciudades', href: '/ciudades' },
            { name: 'Contacto', href: '/contacto' },
        ],
    };

    return (
        <>
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel
                        transition
                        className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <div className="flex px-4 pb-2 pt-5">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Cerrar menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="px-4 py-6 flex flex-row">
                            <DollarPrice />
                        </div>
                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            {navigation.categories.map((category) => (
                                <CloseButton
                                    key={category.name}
                                    as={Link} href={category.href} className="-m-2 block p-2 font-medium text-gray-900"
                                >
                                    {category.name}
                                </CloseButton>
                            ))}
                            {navigation.pages.map((page) => (
                                <div key={page.name} className="flow-root">
                                    <CloseButton as={Link} href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                        {page.name}
                                    </CloseButton>
                                </div>
                            ))}
                        </div>
                        {navigation.categories.map((category) => (
                            <div key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                                <div className="grid grid-cols-1 gap-y-4">
                                    {category.featured?.map((item) => (
                                        <div key={item.name} className="group relative text-sm">
                                            <Image
                                                alt={item.imageAlt ?? item.name}
                                                src={item.imageSrc}
                                                width={300}
                                                height={300}
                                                className="w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                            />
                                            <CloseButton as={Link} href={item.href} className="mt-6 block font-medium text-gray-900">
                                                <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                {item.name}
                                            </CloseButton>
                                            <p aria-hidden="true" className="mt-1 text-sky-600">
                                                Ver todo
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                    Iniciar Sesión
                                </a>
                            </div>
                            <div className="flow-root">
                                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                                    Crear Cuenta
                                </a>
                            </div>
                        </div> */}


                    </DialogPanel>
                </div>
            </Dialog>
            <nav aria-label="Top" className="sticky top-0 z-20 bg-white shadow-lg backdrop-blur-xl backdrop-filter">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center">
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Abrir menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Logo */}
                        <div className="ml-4 flex lg:ml-0">
                            <Link href="/">
                                <span className="sr-only">Aliworld</span>
                                <Image
                                    alt="Logo de Aliworld"
                                    src={AliworldLogo}
                                    width={224}
                                    height={112}
                                    className="h-24 sm:h-28 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Flyout menus */}
                        <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                                {navigation.categories.map((category) => (
                                    <Popover key={category.name} className="flex">
                                        <div className="relative flex">
                                            <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-sky-600 data-[open]:text-sky-600">
                                                {category.name}
                                            </PopoverButton>
                                        </div>

                                        <PopoverPanel
                                            transition
                                            className="group absolute inset-x-0 top-full bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />
                                            <div aria-hidden="true" className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8">
                                                <div className="h-px w-full bg-transparent transition-colors duration-200 ease-out group-data-[open]:bg-gray-200" />
                                            </div>

                                            <div className="relative">
                                                <div className="mx-auto max-w-7xl px-8">
                                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                            {category.featured?.map((item) => (
                                                                <div key={item.name} className="group relative text-base sm:text-sm">
                                                                    <Image
                                                                        alt={item.imageAlt ?? item.name}
                                                                        src={item.imageSrc}
                                                                        width={300}
                                                                        height={300}
                                                                        className="w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                                                    />
                                                                    <CloseButton as={Link} href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                        <span aria-hidden="true" className="absolute inset-0 z-10" />
                                                                        {item.name}
                                                                    </CloseButton>
                                                                    <p aria-hidden="true" className="mt-1 text-sky-600">
                                                                        Ver Todo
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                            {category.sections.map((section) => (
                                                                <div key={section.name}>
                                                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                        {section.name}
                                                                    </p>
                                                                    <ul
                                                                        role="list"
                                                                        aria-labelledby={`${section.name}-heading`}
                                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                    >
                                                                        {section.items.map((item) => (
                                                                            <li key={item.name} className="flex">
                                                                                <CloseButton as={Link} href={item.href} className="hover:text-gray-800">
                                                                                    {item.name}
                                                                                </CloseButton>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </Popover>
                                ))}

                                {navigation.pages.map((page) => (
                                    <Link
                                        key={page.name}
                                        href={page.href}
                                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                    >
                                        {page.name}
                                    </Link>
                                ))}
                            </div>
                        </PopoverGroup>

                        <div className="ml-auto flex items-center">
                            {/*}
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Iniciar sesión
                                </a>
                                <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Crear cuenta
                                </a>
                            </div>
                            */}

                            <div className="hidden items-center text-gray-700 hover:text-gray-800 lg:ml-8 lg:flex">
                                <DollarPrice />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};