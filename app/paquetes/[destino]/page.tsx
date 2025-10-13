import { Breadcrumbs } from '@/app/_components/Breadcrumbs';
import { FAQs } from '@/app/_components/FAQs';
import { TripGrid } from '@/app/_components/TripGrid'
import { getDestinationNameBySlug } from '@/app/_utils/getDestinationNameBySlug';
import { getTrips } from '@/app/lib/getTrips';
import { Metadata } from 'next';
import { PageProps } from '@/.next/types/app/page'
import { OfferCatalog, WithContext } from 'schema-dts';
import { Suspense } from 'react';
import HotelQuotation from '@/app/_components/HotelQuotation';
import DestinationCTAButtons from './_components/DestinationCTAButtons';
import NoPackagesClientComponent from './_components/NoPackagesClientComponent';
import { CheckBadgeIcon, CurrencyDollarIcon, GlobeAmericasIcon, HeartIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { Marquee } from '@/app/_components/Marquee';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { destino } = await params;
    const trips = await getTrips(destino);
    const formattedDestination = getDestinationNameBySlug(destino);
    
    const totalTrips = trips.length;
    const minPrice = trips.length > 0 ? Math.min(...trips.map(t => t.fields.precio)) : 0;
    const currency = trips.length > 0 ? trips[0].fields.moneda : 'USD';
    const countries = [...new Set(trips.flatMap(trip => trip.fields.paises.map(p => p.fields?.nombre)))];
    const cities = [...new Set(trips.flatMap(trip => trip.fields.ciudades.map(c => c.fields?.nombre)))];
    
    const baseDescription = `Descubre ${totalTrips} paquetes de viaje exclusivos a ${formattedDestination}`;
    const priceInfo = minPrice > 0 ? ` desde $${minPrice.toLocaleString()} ${currency}` : '';
    const locationInfo = countries.length > 0 ? `. Explora ${countries.slice(0, 3).join(', ')}${countries.length > 3 ? ' y más destinos' : ''}` : '';
    const cta = '. Reserva con confianza, mejor precio garantizado y asistencia 24/7';
    
    const dynamicDescription = `${baseDescription}${priceInfo}${locationInfo}${cta}`;
    
    const dynamicKeywords = [
        'viajes', 'paquetes', 'tours', 'vacaciones', 'aliworld',
        formattedDestination.toLowerCase(),
        ...countries.map(c => c?.toLowerCase()).filter(Boolean),
        ...cities.slice(0, 5).map(c => c?.toLowerCase()).filter(Boolean),
        'reservaciones', 'hoteles', 'vuelos', 'todo incluido',
        'mejor precio', 'asistencia viaje', 'paquetes personalizados'
    ];

    return {
        title: `${totalTrips} Paquetes de Viaje a ${formattedDestination}${priceInfo} | Aliworld`,
        description: dynamicDescription,
        keywords: dynamicKeywords.filter((keyword, index, self) => self.indexOf(keyword) === index),
        authors: [{ name: 'Aliworld', url: 'https://www.aliworld.mx' }],
        creator: 'Aliworld',
        publisher: 'Aliworld',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/paquetes/${destino}`,
            title: `${totalTrips} Paquetes de Viaje a ${formattedDestination}${priceInfo} | Aliworld`,
            siteName: 'Aliworld',
            description: dynamicDescription,
            locale: 'es_MX',
            images: trips.length > 0 ? [
                {
                    url: `https:${trips[0].fields.urlImagen}`,
                    width: 1200,
                    height: 630,
                    alt: `Paquetes de viaje a ${formattedDestination} - Aliworld`,
                    type: 'image/jpeg',
                }
            ] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${totalTrips} Paquetes a ${formattedDestination}${priceInfo}`,
            description: `Explora nuestros paquetes exclusivos a ${formattedDestination}. Mejor precio garantizado y asistencia 24/7.`,
            site: '@aliworld_mx',
            creator: '@aliworld_mx',
            images: trips.length > 0 ? [`https:${trips[0].fields.urlImagen}`] : [],
        },
        alternates: {
            canonical: `https://www.aliworld.mx/paquetes/${destino}`,
            languages: {
                'es-MX': `https://www.aliworld.mx/paquetes/${destino}`,
                'es': `https://www.aliworld.mx/paquetes/${destino}`,
            },
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        category: 'travel',
        classification: 'Travel Agency',
        referrer: 'origin-when-cross-origin',
        generator: 'Next.js',
        applicationName: 'Aliworld',
        other: {
            'price:amount': minPrice > 0 ? minPrice.toString() : '',
            'price:currency': currency,
            'product:availability': 'in stock',
            'product:condition': 'new',
            'og:price:amount': minPrice > 0 ? minPrice.toString() : '',
            'og:price:currency': currency,
        },
    }
}

export default async function DestinosPage({ params }: PageProps) {
    const { destino } = await params;
    const trips = await getTrips(destino);
    const formattedDestination = getDestinationNameBySlug(destino);

    const structuredData: WithContext<OfferCatalog> = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: `Paquetes de Viaje a ${formattedDestination}`,
        url: `https://www.aliworld.mx/paquetes/${destino}`,
        itemListElement: trips.map((trip) => {
            const { slug, nombre, precio, moneda, dias, ciudades, urlImagen } = trip.fields;

            return {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Trip',
                    name: nombre as string,
                    url: `https://www.aliworld.mx/paquetes/${destino}/${slug}`,
                    image: urlImagen as string,
                    price: precio as number,
                    priceCurrency: moneda as string,
                    validFrom: '2025-01-01',
                    duration: `P${dias}D`,
                    destination: ciudades?.map((ciudad) => ({
                        '@type': 'City',
                        name: ciudad.fields?.nombre
                    }))
                }
            }
        })
    };

    const breadcrumbs = [
        {
            name: 'Inicio',
            href: '/',
        },

        {
            name: 'Paquetes',
            href: '/paquetes',
        },
        {
            name: formattedDestination,
            href: `/paquetes/${destino}`,
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="bg-white">
                {/* Enhanced Hero Section for Destination */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="destination-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <circle cx="30" cy="30" r="3" fill="currentColor" className="text-primary-600" />
                                    <circle cx="10" cy="10" r="1" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="50" cy="20" r="1.5" fill="currentColor" className="text-accent-600" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#destination-pattern)" />
                        </svg>
                    </div>

                    {/* Floating Destination Elements */}
                    <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-10 animate-pulse delay-500"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-secondary-400 to-accent-500 rounded-full opacity-10 animate-pulse delay-700"></div>

                    <main className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                        <div className="text-center">
                            {/* Destination Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold text-primary-700 border border-primary-200/50 shadow-lg mb-6">
                                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Destino Destacado
                                <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800">
                                    {trips.length} Paquetes
                                </span>
                            </div>

                            {/* Main Title */}
                            <header className="mb-8">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
                                    <span className="block text-neutral-900 mb-2">Paquetes de Viaje a</span>
                                    <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                                        {formattedDestination}
                                    </span>
                                </h1>
                                <p className="mt-6 text-xl sm:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
                                    Explora nuestros paquetes cuidadosamente seleccionados para{' '}
                                    <span className="font-semibold text-primary-600">{formattedDestination}</span>.{' '}
                                    Vive experiencias únicas, reserva con flexibilidad y recibe atención personalizada en cada paso de tu viaje.
                                </p>
                            </header>

                            {/* Stats and Features Row */}
                            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                                {/* Available Packages */}
                                <div className="flex items-center gap-4 w-64 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/50 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <GlobeAmericasIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-3xl font-bold text-gray-900">{trips.length}</p>
                                        <p className="text-sm font-medium text-gray-600">Paquetes Disponibles</p>
                                    </div>
                                </div>

                                {/* Price Range */}
                                {trips.length > 0 && (
                                    <div className="flex items-center gap-4 w-64 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/50 shadow-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                            <CurrencyDollarIcon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-3xl font-bold text-gray-900">
                                                ${Math.min(...trips.map(t => t.fields.precio)).toLocaleString()} {trips[0]?.fields.moneda}
                                            </p>
                                            <p className="text-sm font-medium text-neutral-600">Desde</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Trust Signals and Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
                                <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm">
                                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                                        <CheckBadgeIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-800 text-center">Mejor Precio Garantizado</p>
                                </div>

                                <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                        <LockClosedIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-800 text-center">Reserva Segura</p>
                                </div>

                                <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm">
                                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                        <HeartIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-800 text-center">Asistencia en tu Viaje</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <DestinationCTAButtons
                                formattedDestination={formattedDestination}
                                tripsCount={trips.length}
                            />
                        </div>
                    </main>
                </div>

                {/* Packages Section */}
                <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                    <section aria-label={`Paquetes de viaje disponibles para ${formattedDestination}`}>
                        <Suspense>
                            <TripGrid header="" trips={trips} />
                        </Suspense>
                        {trips.length === 0 && (
                            <NoPackagesClientComponent formattedDestination={formattedDestination} />
                        )}
                    </section>
                </main>
            </div>
            <Marquee
                texts={[
                    "🎉 Ofertas especiales hasta 50% de descuento",
                    "✈️ Nuevos destinos disponibles",
                    "🌟 Más de 10,000 viajeros satisfechos",
                    "📞 Asistencia en tu Viaje"
                ]}
                backgroundColor="bg-accent-800"
                textColor="text-white"
            />
            <HotelQuotation />
            <FAQs />
        </>
    );
}