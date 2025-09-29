'use client';

import { PopoverGroup, Popover, PopoverButton, PopoverPanel, Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { 
    MapPinIcon, 
    BuildingOffice2Icon, 
    PaperAirplaneIcon, 
    SparklesIcon, 
    TagIcon, 
    HeartIcon,
    NewspaperIcon,
    MapIcon,
    BanknotesIcon, 
    PhoneIcon 
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import AliworldLogo from '../../public/aliworld-color.svg';
import { DollarPrice } from "./DollarPrice";

const callsToAction = [
    { 
        name: 'Cotizar', 
        href: 'https://wa.me/523314331600?text=Quiero Cotizar', 
        icon: BanknotesIcon,
        description: 'Obtén una cotización personalizada'
    },
    { 
        name: 'Contactar', 
        href: '/contacto', 
        icon: PhoneIcon,
        description: 'Habla con nuestros expertos'
    },
]

const sections = [
    { 
        name: 'Paquetes', 
        href: '/paquetes', 
        description: 'Explora nuestros paquetes turísticos a destinos increíbles.',
        icon: MapPinIcon,
        color: 'text-blue-600'
    },
    { 
        name: 'Hoteles', 
        href: '/hoteles', 
        description: 'Reserva hoteles en todo el mundo con las mejores tarifas.',
        icon: BuildingOffice2Icon,
        color: 'text-purple-600'
    },
    { 
        name: 'Vuelos', 
        href: '/vuelos', 
        description: 'Encuentra vuelos a destinos nacionales e internacionales.',
        icon: PaperAirplaneIcon,
        color: 'text-sky-600'
    },
    { 
        name: 'Actividades', 
        href: '/actividades', 
        description: 'Descubre actividades emocionantes en tus destinos favoritos.',
        icon: SparklesIcon,
        color: 'text-amber-600'
    },
    { 
        name: 'Promociones', 
        href: '/promociones', 
        description: 'Aprovecha nuestras ofertas especiales y descuentos exclusivos.',
        icon: TagIcon,
        color: 'text-green-600'
    },
    { 
        name: 'Favoritos', 
        href: '/favoritos', 
        description: 'Conoce la selección de nuestros expertos.',
        icon: HeartIcon,
        color: 'text-red-600'
    },
]

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const onLinkClick = () => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    }

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
                : 'bg-white/95 backdrop-blur-sm'
        }`}>
            <nav aria-label="Navegación principal" role="navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 group">
                        <span className="sr-only">Aliworld</span>
                        <Image
                            alt="Logo de Aliworld"
                            src={AliworldLogo}
                            width={224}
                            height={112}
                            className="h-20 sm:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </Link>
                </div>
                
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                        aria-label="Abrir menú principal"
                    >
                        <span className="sr-only">Abrir menú principal</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                
                <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-8">
                    <Popover className="relative">
                        {({ open, close }) => (
                            <>
                                <PopoverButton className={`flex items-center gap-x-1 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 rounded-lg px-3 py-2 ${
                                    open 
                                        ? 'text-sky-600 bg-sky-50' 
                                        : 'text-gray-900 hover:text-sky-600 hover:bg-gray-50'
                                }`}>
                                    Reserva
                                    <ChevronDownIcon 
                                        aria-hidden="true" 
                                        className={`size-4 flex-none transition-transform duration-200 ${
                                            open ? 'rotate-180 text-sky-600' : 'text-gray-400'
                                        }`} 
                                    />
                                </PopoverButton>
                                
                                <PopoverPanel className="absolute top-full -left-8 mt-3 w-screen max-w-lg overflow-hidden rounded-2xl z-50 bg-white backdrop-blur-md shadow-2xl ring-1 ring-gray-900/5 border border-gray-100 transition-all duration-300 data-closed:translate-y-2 data-closed:opacity-0 data-closed:scale-95 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 gap-2">
                                            {sections.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-4 rounded-xl p-4 text-sm hover:bg-gradient-to-r hover:from-gray-50 hover:to-sky-50/50 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm"
                                                >
                                                    <div className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 group-hover:from-white group-hover:to-gray-50 transition-all duration-200 ${item.color}`}>
                                                        <item.icon aria-hidden="true" className="h-6 w-6" />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <Link 
                                                            href={item.href} 
                                                            className="block font-semibold text-gray-900 group-hover:text-sky-700"
                                                            onClick={() => close()}
                                                        >
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </Link>
                                                        <p className="mt-1 text-gray-600 text-xs leading-relaxed group-hover:text-gray-700">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-gray-50 to-sky-50/30 px-6 py-4 border-t border-gray-100">
                                        <div className="grid grid-cols-2 gap-4">
                                            {callsToAction.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="group flex items-center gap-x-3 rounded-xl p-3 text-sm font-semibold text-gray-900 hover:bg-white hover:shadow-sm transition-all duration-200 hover:scale-[1.02]"
                                                    aria-label={item.name}
                                                    onClick={() => close()}
                                                >
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all duration-200">
                                                        <item.icon aria-hidden="true" className="h-4 w-4 text-sky-600" />
                                                    </div>
                                                    <div>
                                                        <div className="text-gray-900 font-semibold">{item.name}</div>
                                                        <div className="text-xs text-gray-600">{item.description}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </>
                        )}
                    </Popover>
                    
                    <Link 
                        href="/ciudades" 
                        className="flex items-center gap-x-2 text-sm font-semibold text-gray-900 hover:text-sky-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 rounded-lg px-3 py-2 hover:bg-gray-50"
                        aria-current={typeof window !== 'undefined' && window.location.pathname === '/ciudades' ? 'page' : undefined}
                    >
                        <MapIcon className="h-4 w-4 text-gray-400" />
                        Guías de Ciudades
                    </Link>
                    
                    <Link 
                        href="/blog" 
                        className="flex items-center gap-x-2 text-sm font-semibold text-gray-900 hover:text-sky-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 rounded-lg px-3 py-2 hover:bg-gray-50"
                        aria-current={typeof window !== 'undefined' && window.location.pathname === '/blog' ? 'page' : undefined}
                    >
                        <NewspaperIcon className="h-4 w-4 text-gray-400" />
                        Blog
                    </Link>
                    
                    <div className="border-l border-gray-200 pl-6">
                        <DollarPrice />
                    </div>
                    
                    <div className="flex items-center gap-x-3">
                        <Link
                            href="https://wa.me/523314331600?text=Quiero Cotizar"
                            className="inline-flex items-center gap-x-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:from-sky-700 hover:to-blue-700 hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2"
                        >
                            <BanknotesIcon className="h-4 w-4" />
                            Cotizar Ahora
                        </Link>
                    </div>
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300" aria-hidden="true" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-md px-6 py-6 sm:max-w-sm border-l border-gray-200 shadow-2xl transform transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 group" onClick={onLinkClick}>
                            <span className="sr-only">Aliworld</span>
                            <Image
                                alt="Logo de Aliworld"
                                src={AliworldLogo}
                                width={192}
                                height={96}
                                className="h-20 sm:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-xl p-2.5 text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 transition-all duration-200"
                            aria-label="Cerrar menú"
                        >
                            <span className="sr-only">Cerrar menú</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-200/30">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className={`group flex cursor-pointer w-full items-center justify-between rounded-xl py-3 px-4 text-base font-semibold transition-all duration-200 ${
                                                open 
                                                    ? 'text-sky-600 bg-sky-50' 
                                                    : 'text-gray-900 hover:bg-gray-50'
                                            }`}>
                                                <span className="flex items-center gap-x-3">
                                                    <MapPinIcon className={`h-5 w-5 ${open ? 'text-sky-600' : 'text-gray-400'}`} />
                                                    Reserva
                                                </span>
                                                <ChevronDownIcon 
                                                    aria-hidden="true" 
                                                    className={`size-5 transition-transform duration-200 ${
                                                        open ? 'rotate-180 text-sky-600' : 'text-gray-400'
                                                    }`} 
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {sections.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={onLinkClick}
                                                        className="group flex items-center gap-x-3 rounded-xl py-3 px-6 text-sm font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-sky-50/50 transition-all duration-200"
                                                    >
                                                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ${item.color}`}>
                                                            <item.icon aria-hidden="true" className="h-4 w-4" />
                                                        </div>
                                                        <div>
                                                            <div>{item.name}</div>
                                                            <div className="text-xs text-gray-600 mt-0.5">{item.description}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                                
                                                <div className="border-t border-gray-200/30 mt-4 pt-4 space-y-2">
                                                    {callsToAction.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={onLinkClick}
                                                            className="group flex items-center gap-x-3 rounded-xl py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200"
                                                        >
                                                            <item.icon aria-hidden="true" className="h-4 w-4" />
                                                            <div>
                                                                <div>{item.name}</div>
                                                                <div className="text-xs text-sky-100 mt-0.5">{item.description}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>

                                <Link
                                    onClick={onLinkClick}
                                    href="/ciudades"
                                    className="flex items-center gap-x-3 rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all duration-200"
                                >
                                    <MapIcon className="h-5 w-5 text-gray-400" />
                                    Guías de Ciudades
                                </Link>
                                
                                <Link
                                    onClick={onLinkClick}
                                    href="/blog"
                                    className="flex items-center gap-x-3 rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all duration-200"
                                >
                                    <NewspaperIcon className="h-5 w-5 text-gray-400" />
                                    Blog
                                </Link>
                            </div>
                            
                            <div className="py-6 space-y-4">
                                <DollarPrice />
                                
                                <div className="pt-4 border-t border-gray-200/30">
                                    <Link
                                        href="https://wa.me/523314331600?text=Quiero Cotizar"
                                        onClick={onLinkClick}
                                        className="flex items-center justify-center gap-x-2 w-full rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-sky-700 hover:to-blue-700 hover:shadow-xl transition-all duration-200"
                                    >
                                        <BanknotesIcon className="h-5 w-5" />
                                        Cotizar Ahora
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
};