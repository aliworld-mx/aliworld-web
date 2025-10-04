
import { Breadcrumbs } from '@/app/_components/Breadcrumbs';
import { FAQs } from '@/app/_components/FAQs';
import { FavoritesGrid } from '@/app/_components/FavoritesGrid';
import { Metadata } from 'next';
import { Suspense } from 'react';
import HotelQuotation from '../_components/HotelQuotation';
import { ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/20/solid';
import { CalendarDateRangeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: `Paquetes Favoritos | Aliworld`,
    description: `Descubre los paquetes de viaje favoritos`,
    openGraph: {
        type: 'website',
        url: `https://www.aliworld.mx/favoritos`,
        title: `Paquetes Favoritos | Aliworld`,
        siteName: 'Aliworld',
        description: `Descubre los paquetes de viaje favoritos`,
    },
    alternates: {
        canonical: `https://www.aliworld.mx/favoritos`,
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
}

const breadcrumbs = [
    {
        name: 'Inicio',
        href: '/',
    },
    {
        name: 'Favoritos',
        href: '/favoritos',
    },
]

export default function FavoritosPage() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Paquetes Favoritos - Aliworld',
        description: 'Tus paquetes de viaje favoritos guardados para consulta rápida',
        url: 'https://www.aliworld.mx/favoritos',
        mainEntity: {
            '@type': 'ItemList',
            name: 'Lista de Favoritos',
            description: 'Paquetes de viaje guardados como favoritos'
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-neutral-50 via-accent-50/30 to-primary-50/30 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="favorites-hero-pattern" x="0" y="0" width="110" height="110" patternUnits="userSpaceOnUse">
                                <circle cx="55" cy="55" r="4" fill="currentColor" className="text-accent-600" />
                                <circle cx="27.5" cy="27.5" r="2.5" fill="currentColor" className="text-primary-600" />
                                <circle cx="82.5" cy="27.5" r="2" fill="currentColor" className="text-secondary-600" />
                                <circle cx="27.5" cy="82.5" r="3.5" fill="currentColor" className="text-purple-600" />
                                <circle cx="82.5" cy="82.5" r="1.5" fill="currentColor" className="text-accent-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#favorites-hero-pattern)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-44 h-44 bg-gradient-to-br from-primary-300 to-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-20 animate-pulse delay-500"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Favorites Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                            </div>
                            <span className="text-accent-700 font-semibold text-lg">Mis Favoritos</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                            Tus viajes <span className="bg-gradient-to-r from-accent-600 via-primary-600 to-purple-600 bg-clip-text text-transparent">soñados</span> en un lugar
                        </h1>
                        
                        <div className="h-1 w-24 bg-gradient-to-r from-accent-500 via-primary-500 to-purple-500 rounded-full mx-auto mb-8"></div>
                        
                        <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Guarda tus paquetes de viaje favoritos y accede fácilmente a ellos cuando estés listo para reservar. 
                            Nunca pierdas de vista esos destinos que capturaron tu corazón.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Guarda y Organiza</h3>
                                <p className="text-sm text-neutral-600">Mantén tus viajes favoritos organizados y accesibles</p>
                            </div>
                            
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Acceso Rápido</h3>
                                <p className="text-sm text-neutral-600">Encuentra rápidamente tus destinos preferidos</p>
                            </div>
                            
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Comparte Fácil</h3>
                                <p className="text-sm text-neutral-600">Comparte tus favoritos con familia y amigos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="bg-gradient-to-br from-white to-neutral-50">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-white to-neutral-50">
                <Suspense fallback={
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                        <div className="text-center mb-12">
                            <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-accent-600 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                Cargando tus favoritos...
                            </h2>
                            <p className="text-neutral-600 mb-8">
                                Estamos preparando tu lista personalizada de viajes soñados
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/50 animate-pulse">
                                    <div className="bg-gradient-to-br from-accent-200 to-primary-200 h-64"></div>
                                    <div className="p-6">
                                        <div className="h-6 bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-full mb-4"></div>
                                        <div className="h-4 bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-full mb-2"></div>
                                        <div className="h-4 bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-full w-3/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }>
                    <FavoritesGrid />
                </Suspense>

                {/* Tips Section */}
                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-6">
                                Consejos para <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">organizar</span> tus favoritos
                            </h2>
                            <p className="text-lg text-neutral-600">
                                Saca el máximo provecho de tu lista de favoritos con estos consejos útiles
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <CalendarDateRangeIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Planifica por Temporada</h3>
                                <p className="text-sm text-neutral-600">Organiza tus favoritos según la mejor época para viajar</p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <CurrencyDollarIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Compara Precios</h3>
                                <p className="text-sm text-neutral-600">Revisa regularmente los precios de tus favoritos</p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <UserGroupIcon className='w-8 h-8 text-white' />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Comparte con Familia</h3>
                                <p className="text-sm text-neutral-600">Involucra a todos en la planificación del viaje</p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <ClockIcon className='w-8 h-8 text-white' />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Reserva Temprano</h3>
                                <p className="text-sm text-neutral-600">Las mejores ofertas se agotan rápido</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <HotelQuotation />
            <FAQs />
        </>
    )
}