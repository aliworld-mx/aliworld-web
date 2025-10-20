import { getDestinations } from '../lib/getDestinations';
import Benefits from '../_components/Benefits';
import { FAQs } from '../_components/FAQs';
import { ItemList, WithContext, Organization, WebSite } from 'schema-dts';
import { Metadata } from 'next';
import { Breadcrumbs } from '../_components/Breadcrumbs';
import { Suspense } from 'react';
import DestinationsList from './_components/DestinationsList';
import PackagesCTAButtons from './_components/PackagesCTAButtons';
import { Marquee } from '../_components/Marquee';
import { GlobeAmericasIcon, MapPinIcon, HeartIcon, CheckBadgeIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

export const revalidate = 2629746;

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
    const destinations = await getDestinations();
    const destinationCount = destinations?.length || 0;
    
    const destinationNames = destinations?.map(d => d.fields.nombre?.toLowerCase()).filter(Boolean) || [];
    const dynamicKeywords = [
        'viajes', 'paquetes de viaje', 'cruceros', 'hoteles', 'reservaciones', 
        'aliworld', 'turismo', 'vacaciones', 'ofertas de viaje', 'destinos internacionales',
        'paquetes todo incluido', 'viajes organizados', 'tours', 'escapadas',
        'mejor precio garantizado', 'asistencia 24/7', 'agencia de viajes',
        ...destinationNames,
        'europa', 'asia', 'america', 'mexico', 'estados unidos', 'canada'
    ];

    const enhancedDescription = `Explora ${destinationCount} destinos únicos con nuestros paquetes de viaje exclusivos. Desde Europa hasta Asia, descubre ofertas especiales con mejor precio garantizado, asistencia 24/7 y experiencias inolvidables. ¡Reserva ahora y vive tu próxima aventura!`;
    
    return {
        title: `${destinationCount} Destinos de Viaje Únicos | Paquetes Exclusivos | Aliworld`,
        description: enhancedDescription,
        keywords: dynamicKeywords.filter((keyword, index, self) => self.indexOf(keyword) === index),
        authors: [{ name: 'Aliworld', url: 'https://www.aliworld.mx' }],
        creator: 'Aliworld - Agencia de Viajes',
        publisher: 'Aliworld',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        robots: 'index, follow',
        openGraph: {
            type: 'website',
            url: 'https://www.aliworld.mx/paquetes',
            title: `${destinationCount} Destinos Únicos | Paquetes de Viaje Exclusivos | Aliworld`,
            siteName: 'Aliworld',
            description: enhancedDescription,
            locale: 'es_MX',
            images: [
                {
                    url: 'https://www.aliworld.mx/paquetes.jpg',
                    width: 1200,
                    height: 630,
                    alt: `Catálogo de ${destinationCount} destinos de viaje - Aliworld`,
                    type: 'image/jpeg',
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@aliworld_mx',
            creator: '@aliworld_mx',
            title: `${destinationCount} Destinos Únicos | Paquetes Exclusivos`,
            description: `Explora ${destinationCount} destinos increíbles. Mejor precio garantizado y asistencia 24/7. ¡Reserva tu aventura!`,
            images: ['https://www.aliworld.mx/paquetes.jpg'],
        },
        alternates: {
            canonical: 'https://www.aliworld.mx/paquetes',
            languages: {
                'es-MX': 'https://www.aliworld.mx/paquetes',
                'es': 'https://www.aliworld.mx/paquetes',
            },
        },
        category: 'Travel',
        classification: 'Travel Agency - Package Tours',
        referrer: 'origin-when-cross-origin',
        generator: 'Next.js',
        applicationName: 'Aliworld',
        other: {
            'destination:count': destinationCount.toString(),
            'service:type': 'travel packages',
            'coverage:area': 'worldwide',
            'og:type': 'travel.destinations',
        },
    };
}

export default async function PaquetesPage() {
    const destinations = await getDestinations();

    const organizationStructuredData: WithContext<Organization> = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Aliworld',
        url: 'https://www.aliworld.mx',
        logo: 'https://www.aliworld.mx/aliworld-color.svg',
        description: 'Agencia de viajes especializada en paquetes turísticos a los mejores destinos del mundo',
        sameAs: [
            'https://twitter.com/aliworld_mx',
            'https://facebook.com/aliworld.mx',
            'https://instagram.com/aliworld_mx'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: 'Spanish'
        }
    };

    const websiteStructuredData: WithContext<WebSite> = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Aliworld',
        url: 'https://www.aliworld.mx',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.aliworld.mx/paquetes?search={search_term_string}'
            },
            query: 'required name=search_term_string'
        }
    };

    const itemListStructuredData: WithContext<ItemList> = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: "Paquetes de Viaje - Destinos Disponibles",
        description: `Catálogo completo de ${destinations?.length || 0} destinos turísticos con paquetes de viaje disponibles`,
        url: 'https://www.aliworld.mx/paquetes',
        numberOfItems: destinations?.length || 0,
        itemListElement: destinations?.map((destination, index) => {
            const { id, nombre, imagen, descripcion } = destination.fields;
            const { url } = imagen.fields.file!;
            const imageUrl = `https:${url}`;

            return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'TouristDestination',
                    name: nombre as string,
                    url: `https://www.aliworld.mx/paquetes/${id}`,
                    image: imageUrl as string,
                    description: descripcion as string,
                    identifier: id as string
                }
            }
        }) || []
    };

    const allStructuredData = [
        organizationStructuredData,
        websiteStructuredData,
        itemListStructuredData
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(allStructuredData) }}
            />
            <div className="bg-white">
                {/* Enhanced Hero Section for Travel Packages Catalog */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="packages-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                    <circle cx="30" cy="30" r="3" fill="currentColor" className="text-primary-600" />
                                    <circle cx="10" cy="10" r="1" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="50" cy="20" r="1.5" fill="currentColor" className="text-accent-600" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#packages-pattern)" />
                        </svg>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-10 animate-pulse delay-500"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-gradient-to-br from-secondary-400 to-accent-500 rounded-full opacity-10 animate-pulse delay-700"></div>

                    <main className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                        <Breadcrumbs breadcrumbs={[
                            { name: 'Inicio', href: '/' },
                            { name: 'Paquetes', href: '/paquetes' }
                        ]} />
                        
                        <div className="text-center">
                            {/* Hero Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold text-primary-700 border border-primary-200/50 shadow-lg mb-6">
                                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Catálogo Mundial de Destinos
                                <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800">
                                    {destinations?.length || 0} Destinos
                                </span>
                            </div>

                            {/* Main Title */}
                            <header className="mb-8">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight">
                                    <span className="block text-neutral-900 mb-2">Explora el Mundo con</span>
                                    <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                                        Paquetes Exclusivos
                                    </span>
                                </h1>
                                <p className="mt-6 text-xl sm:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed">
                                    Descubre {destinations?.length || 0} destinos únicos alrededor del mundo.{' '}
                                    <span className="font-semibold text-primary-600">Reserva con confianza</span>,{' '}
                                    mejor precio garantizado y asistencia personalizada en cada aventura.
                                </p>
                            </header>

                            {/* Stats Row */}
                            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                                {/* Available Destinations */}
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/50 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                                        <GlobeAmericasIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-3xl font-bold text-neutral-900">{destinations?.length || 0}</p>
                                        <p className="text-sm font-medium text-neutral-600">Destinos Únicos</p>
                                    </div>
                                </div>

                                {/* Continents Coverage */}
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/50 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                                        <MapPinIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-3xl font-bold text-neutral-900">5</p>
                                        <p className="text-sm font-medium text-neutral-600">Continentes</p>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/50 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                                        <HeartIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-3xl font-bold text-neutral-900">2+</p>
                                        <p className="text-sm font-medium text-neutral-600">Años de Experiencia</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                                <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm">
                                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                                        <CheckBadgeIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-800 text-center">Mejor Precio Garantizado</p>
                                </div>
                                
                                <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                        <ClockIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-800 text-center">Asistencia en tu Viaje</p>
                                </div>
                                
                                <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm">
                                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                        <CurrencyDollarIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-800 text-center">Facilidades de Pago</p>
                                </div>
                                
                                <div className="flex flex-col items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-sm">
                                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                        <HeartIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-800 text-center">Experiencias Únicas</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <PackagesCTAButtons />
                        </div>
                    </main>
                </div>

                {/* Destinations Catalog Section */}
                <main id="destinations-catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                            Elige Tu Próximo Destino
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Desde Europa hasta Asia, cada destino te espera con experiencias únicas y paquetes diseñados especialmente para ti.
                        </p>
                    </div>

                    <section aria-label="Catálogo de destinos de viaje">
                        <Suspense fallback={
                            <div className="animate-pulse">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100">
                                            <div className="aspect-square w-full bg-gray-200 rounded-t-xl"></div>
                                            <div className="p-6 space-y-3">
                                                <div className="h-6 bg-gray-200 rounded-md"></div>
                                                <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                                                <div className="h-8 bg-gray-200 rounded-md"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }>
                            <DestinationsList destinations={destinations} />
                        </Suspense>
                    </section>
                </main>
            </div>
            
            {/* Marquee with promotions */}
            <Marquee
                texts={[
                    "🎉 Ofertas especiales en paquetes seleccionados",
                    "✈️ Reserva ahora y viaja después",
                    "🌟 Más de 2 años creando experiencias únicas",
                    "📞 Asesoría personalizada sin costo",
                    "💰 Facilidades de pago disponibles"
                ]}
                backgroundColor="bg-primary-700"
                textColor="text-white"
                speed={25}
            />
            <Benefits />
            <FAQs />
        </>
    )
}