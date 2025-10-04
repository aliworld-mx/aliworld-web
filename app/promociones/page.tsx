
import { Breadcrumbs } from '@/app/_components/Breadcrumbs';
import { FAQs } from '@/app/_components/FAQs';
import { TripGrid } from '@/app/_components/TripGrid'
import { Metadata } from 'next';
import { OfferCatalog, WithContext } from 'schema-dts';
import { getPromos } from '../lib/getPromos';
import { Suspense } from 'react';
import HotelQuotation from '../_components/HotelQuotation';
import { CheckBadgeIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid';

export const revalidate = 3600;

export const metadata: Metadata = {
    title: `Promociones de Paquetes de Viaje | Aliworld`,
    description: `Descubre los paquetes de viaje con el mejor precio en Aliworld`,
    openGraph: {
        type: 'website',
        url: `https://www.aliworld.mx/promociones`,
        title: `Promociones de Paquetes de Viaje | Aliworld`,
        siteName: 'Aliworld',
        description: `Descubre los paquetes de viaje con el mejor precio en Aliworld`,
    },
    alternates: {
        canonical: `https://www.aliworld.mx/promociones`,
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
        name: 'Promociones',
        href: '/promociones',
    },
]

export default async function PromosPage() {
    const promos = await getPromos();

    const structuredData: WithContext<OfferCatalog> = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: `Paquetes de viaje en promoción`,
        url: `https://www.aliworld.mx/promociones`,
        itemListElement: promos?.fields?.paquetes.map((trip) => {
            const { destino, slug, nombre, imagen, precio, moneda, dias, ciudades } = trip.fields;
            const { url } = imagen.fields.file!;
            const imageUrl = `https:${url}`;

            return {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Trip',
                    name: nombre as string,
                    url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
                    image: imageUrl as string,
                    price: precio as number,
                    priceCurrency: moneda as string,
                    validFrom: '2024-12-01',
                    duration: `P${dias}D`,
                    destination: ciudades?.map((ciudad) => ({
                        '@type': 'City',
                        name: ciudad.fields?.nombre
                    }))
                }
            }
        })
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="promos-hero-pattern" x="0" y="0" width="130" height="130" patternUnits="userSpaceOnUse">
                                <circle cx="65" cy="65" r="4.5" fill="currentColor" className="text-primary-600" />
                                <circle cx="32.5" cy="32.5" r="3" fill="currentColor" className="text-secondary-600" />
                                <circle cx="97.5" cy="32.5" r="2.5" fill="currentColor" className="text-accent-600" />
                                <circle cx="32.5" cy="97.5" r="4" fill="currentColor" className="text-purple-600" />
                                <circle cx="97.5" cy="97.5" r="2" fill="currentColor" className="text-primary-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#promos-hero-pattern)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-accent-300 to-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-20 animate-pulse delay-500"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                        {/* Promo Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-full flex items-center justify-center">
                                <CurrencyDollarIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-secondary-700 font-semibold text-lg">Promociones Especiales</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                            Descubre <span className="bg-gradient-to-r from-secondary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent">ofertas exclusivas</span> de viaje
                        </h1>

                        <div className="h-1 w-24 bg-gradient-to-r from-secondary-500 via-accent-500 to-primary-500 rounded-full mx-auto mb-8"></div>

                        <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Aprovecha nuestras promociones limitadas y descuentos especiales en paquetes de viaje.
                            Destinos increíbles a precios únicos que no querrás dejar pasar.
                        </p>

                        {/* Promo Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                                    {promos?.fields?.paquetes?.length || 0}+
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Paquetes en Oferta</div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-2">
                                    50%
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Hasta de Descuento</div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                                    24H
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Ofertas Limitadas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="bg-gradient-to-br from-white to-neutral-50">
            </div>

            {/* Main Content */}
            <div className="bg-gradient-to-br from-white to-neutral-50">
                <Suspense fallback={
                    <div className="py-24 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-primary-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                            Cargando promociones...
                        </h3>
                        <p className="text-neutral-600">
                            Estamos buscando las mejores ofertas para ti
                        </p>
                    </div>
                }>
                    <TripGrid header='Paquetes de viaje con promociones especiales' trips={promos?.fields.paquetes ?? []} />
                </Suspense>

                {/* Promo Benefits Section */}
                <section className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-6">
                                ¿Por qué nuestras <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">promociones</span> son únicas?
                            </h2>
                            <p className="text-lg text-neutral-600">
                                Cada oferta está cuidadosamente seleccionada para brindarte la mejor experiencia al mejor precio
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <CurrencyDollarIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                                    Precios Transparentes
                                </h3>
                                <p className="text-neutral-600 text-center">
                                    Sin costos ocultos ni sorpresas. El precio que ves es el precio final que pagas.
                                </p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <ClockIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                                    Ofertas por Tiempo Limitado
                                </h3>
                                <p className="text-neutral-600 text-center">
                                    Promociones exclusivas con disponibilidad limitada. ¡Reserva antes de que se agoten!
                                </p>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <CheckBadgeIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                                    Calidad Garantizada
                                </h3>
                                <p className="text-neutral-600 text-center">
                                    Todos nuestros paquetes en promoción mantienen los mismos estándares de calidad y servicio.
                                </p>
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