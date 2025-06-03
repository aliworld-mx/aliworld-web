'use client';

import { PopoverGroup, Popover, PopoverButton, PopoverPanel, Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import AliworldLogo from '../../public/aliworld-color.svg';
import { BanknotesIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { DollarPrice } from "./DollarPrice";

const callsToAction = [
    { name: 'Cotizar', href: 'https://wa.me/523314331600?text=Quiero Cotizar', icon: BanknotesIcon },
    { name: 'Contactar', href: '/contacto', icon: PhoneIcon },
]

const sections = [
    { name: 'Paquetes', href: '/paquetes', description: 'Explora nuestros paquetes turísticos a destinos increíbles.' },
    { name: 'Hoteles', href: 'https://reservas.aliworld.mx', description: 'Reserva hoteles en todo el mundo con las mejores tarifas.' },
    { name: 'Vuelos', href: 'https://reservas.aliworld.mx', description: 'Encuentra vuelos a destinos nacionales e internacionales.' },
    { name: 'Actividades', href: '/actividades', description: 'Descubre actividades emocionantes en tus destinos favoritos.' },
    { name: 'Promociones', href: '/promociones', description: 'Aprovecha nuestras ofertas especiales y descuentos exclusivos.' },
    { name: 'Favoritos', href: '/favoritos', description: 'Conoce la selección de nuestros expertos.' },
]

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
    const onLinkClick = () => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    }

    return (
        <header className="bg-white">
            <nav aria-label="Navegación principal" role="navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
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
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        aria-label="Abrir menú principal"
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-md font-semibold text-gray-900">
                            Reserva
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 mt-3 w-screen max-w-md overflow-hidden rounded-3xl z-50 bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {sections.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex gap-x-6 rounded-lg p-4 text-md hover:bg-gray-50"
                                    >
                                        <div className="flex-auto">
                                            <Link href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                        aria-label={item.name}
                                    >
                                        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                    <Link href="/ciudades" className="text-md font-semibold text-gray-900" aria-current={typeof window !== 'undefined' && window.location.pathname === '/ciudades' ? 'page' : undefined}>
                        Guías de Ciudades
                    </Link>
                    <Link href="/blog" className="text-md font-semibold text-gray-900" aria-current={typeof window !== 'undefined' && window.location.pathname === '/blog' ? 'page' : undefined}>
                        Blog
                    </Link>
                    <DollarPrice />
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10 bg-black/30 transition-opacity duration-300" aria-hidden="true" />
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 pb-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                    >
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5" >
                                <span className="sr-only">Aliworld</span>
                                <Image
                                    alt="Logo de Aliworld"
                                    src={AliworldLogo}
                                    width={192}
                                    height={96}
                                    className="h-24 sm:h-28 w-auto"
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                aria-label="Cerrar menú"
                            >
                                <span className="sr-only">Cerrar menú</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                            Reserva
                                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...sections, ...callsToAction].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    onClick={onLinkClick}
                                                    className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <Link
                                    onClick={onLinkClick}
                                        href="/ciudades"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Guías de Ciudades
                                    </Link>
                                    <Link
                                        onClick={onLinkClick}
                                        href="/blog"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Blog
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <DollarPrice />
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
            </Dialog>
        </header>
    )
};