import { SunIcon, MoonIcon, MapPinIcon, GlobeAmericasIcon, CalendarDaysIcon, CheckBadgeIcon } from '@heroicons/react/20/solid'
import { ClockIcon } from '@heroicons/react/24/outline'
import { getTrip } from '@/app/lib/getTrip'
import { toMoney } from '@/app/_utils/toMoney'
import Image from 'next/image'
import Benefits from '@/app/_components/Benefits'
import { Breadcrumbs } from '@/app/_components/Breadcrumbs'
import { Metadata } from 'next'
import { FAQs } from '@/app/_components/FAQs'
import ExperienceTabs from '@/app/_components/Experiences/ExperienceTabs'
import HotelQuotation from '@/app/_components/HotelQuotation'
import { QuotationButton } from '@/app/_components/QuotationButton'
import { CTAButton } from '@/app/_components/CTAButton'
import { ActionButtons } from '@/app/_components/ActionButtons'
import { Marquee } from '@/app/_components/Marquee'

interface PageProps {
    params: Promise<{ destino: string; paquete: string }>;
}

export const revalidate = 36000;

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { paquete } = await params;
    const experience = await getTrip(paquete);
    const { nombre, destino, slug, precio, moneda, dias, noches, ciudades, paises, urlImagen } = experience.fields;

    const countries = paises.map(p => p.fields?.nombre).filter(Boolean).join(', ');
    const cities = ciudades.map(c => c.fields?.nombre).filter(Boolean).slice(0, 3).join(', ');
    const priceInfo = `desde ${toMoney(precio)} ${moneda}`;
    const duration = `${dias} días y ${noches} noches`;

    const enhancedDescription = `Paquete de viaje ${nombre} a ${destino.fields.nombre} - ${duration}. Explora ${cities}${cities.length === 3 ? ' y más' : ''} en ${countries}. ${priceInfo}. Incluye vuelo, hotel y tours. Reserva con mejor precio garantizado y asistencia 24/7.`;

    const dynamicKeywords = [
        'viajes', 'paquetes de viaje', 'tours', 'vacaciones', 'aliworld',
        nombre.toLowerCase(),
        destino.fields.nombre.toLowerCase(),
        ...countries.split(', ').map(c => c.toLowerCase()),
        ...cities.split(', ').map(c => c.toLowerCase()),
        'reservaciones', 'hoteles', 'vuelos', 'mejor precio',
        'asistencia 24/7', 'todo incluido', `${dias} dias`,
        'paquete turistico', 'viaje organizado'
    ];

    return {
        title: `${nombre} - ${duration} a ${destino.fields.nombre} ${priceInfo} | Aliworld`,
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
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
            title: `${nombre} - ${duration} a ${destino.fields.nombre} | Aliworld`,
            siteName: 'Aliworld',
            description: enhancedDescription,
            locale: 'es_MX',
            images: [
                {
                    url: urlImagen,
                    width: 1200,
                    height: 630,
                    alt: `${nombre} - Paquete de viaje a ${destino.fields.nombre}`,
                    type: 'image/jpeg',
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@aliworld_mx',
            creator: '@aliworld_mx',
            title: `${nombre} - ${duration}`,
            description: `Explora ${destino.fields.nombre} ${priceInfo}. Incluye vuelo, hotel y tours. ¡Reserva ahora!`,
            images: [urlImagen],
        },
        alternates: {
            canonical: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
            languages: {
                'es-MX': `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
                'es': `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
            },
        },
        category: 'Travel Package',
        classification: 'Travel Product',
        referrer: 'origin-when-cross-origin',
        generator: 'Next.js',
        applicationName: 'Aliworld',
        other: {
            'product:price:amount': precio.toString(),
            'product:price:currency': moneda,
            'product:availability': 'in stock',
            'product:condition': 'new',
            'travel:duration': `${dias}D${noches}N`,
            'travel:destination': destino.fields.nombre,
        },
    }
}

export default async function PaquetePage({ params }: PageProps) {
    const { paquete } = await params;
    const experience = await getTrip(paquete);
    const { nombre, slug, precio, dias, noches, moneda, destino, ciudades, paises, salidasDiarias, diasDeSalidas, urlImagen } = experience.fields;

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': ['Product', 'Trip'],
        name: nombre,
        description: `Paquete de viaje ${nombre} a ${destino.fields.nombre} - ${dias} días y ${noches} noches. Explora ${ciudades.map(c => c.fields?.nombre).filter(Boolean).slice(0, 3).join(', ')} en ${paises.map(p => p.fields?.nombre).filter(Boolean).join(', ')}.`,
        url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
        image: [
            {
                '@type': 'ImageObject',
                url: urlImagen,
                width: '800',
                height: '400',
                caption: `${nombre} - Paquete de viaje a ${destino.fields.nombre}`
            }
        ],
        brand: {
            '@type': 'Brand',
            name: 'Aliworld',
            url: 'https://www.aliworld.mx'
        },
        provider: {
            '@type': 'Organization',
            name: 'Aliworld',
            url: 'https://www.aliworld.mx',
            logo: 'https://www.aliworld.mx/aliworld-color.svg',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+52-33-1433-1600',
                contactType: 'customer service',
                availableLanguage: 'Spanish'
            }
        },
        offers: {
            '@type': 'Offer',
            price: precio.toString(),
            priceCurrency: moneda,
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2025-12-31',
            seller: {
                '@type': 'Organization',
                name: 'Aliworld'
            },
            category: 'Travel Package',
            eligibleRegion: {
                '@type': 'Country',
                name: 'Mexico'
            }
        },
        itinerary: {
            '@type': 'ItemList',
            numberOfItems: ciudades.length,
            itemListElement: ciudades.map((ciudad, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'Place',
                    name: ciudad.fields?.nombre,
                    address: {
                        '@type': 'PostalAddress',
                        addressCountry: paises.find(p => p.fields?.nombre)?.fields?.nombre || ''
                    }
                }
            }))
        },
        duration: `P${dias}D`,
        partOfTrip: {
            '@type': 'Trip',
            name: `Viaje a ${destino.fields.nombre}`,
            touristType: 'Leisure'
        },
        touristType: 'Leisure',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
            url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
            name: `${nombre} - Paquete de viaje | Aliworld`,
            description: `Reserva tu paquete de viaje ${nombre} a ${destino.fields.nombre}. ${dias} días y ${noches} noches desde ${precio} ${moneda}.`
        },
        additionalProperty: [
            {
                '@type': 'PropertyValue',
                name: 'Duración',
                value: `${dias} días, ${noches} noches`
            },
            {
                '@type': 'PropertyValue',
                name: 'Destino',
                value: destino.fields.nombre
            },
            {
                '@type': 'PropertyValue',
                name: 'Tipo de salida',
                value: salidasDiarias ? 'Salidas Diarias' : diasDeSalidas || 'Consultar'
            }
        ]
    };

    const breadcrumbs = [
        {
            name: 'Inicio',
            href: '/',
        },
        {
            name: destino.fields.nombre,
            href: `/paquetes/${destino.fields.id}`,
        },
        {
            name: nombre,
            href: `/paquetes/${destino.fields.id}/${slug}`,
        },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="package-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                <circle cx="30" cy="30" r="2" fill="currentColor" className="text-primary-600" />
                                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-secondary-600" />
                                <circle cx="50" cy="20" r="1.5" fill="currentColor" className="text-accent-600" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#package-pattern)" />
                    </svg>
                </div>

                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-10 animate-pulse delay-1000"></div>

                <div className="relative">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <MapPinIcon className="w-6 h-6 text-primary-500" />
                                <span className="text-primary-600 font-semibold text-lg">{destino.fields.nombre}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-6 leading-tight">
                                {nombre}
                            </h1>
                            <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                                <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                                            <SunIcon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-lg font-bold text-neutral-900">{dias} Días</span>
                                    </div>
                                    <div className="w-px h-8 bg-neutral-200"></div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                                            <MoonIcon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-lg font-bold text-neutral-900">{noches} Noches</span>
                                    </div>
                                </div>

                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50">
                                    <div className="text-center">
                                        <div className="flex items-baseline justify-center gap-2 mb-1">
                                            <span className="text-2xl font-black text-primary-600">
                                                {toMoney(precio)} {moneda}
                                            </span>
                                        </div>
                                        <p className="text-xs text-neutral-600">Por adulto + impuestos</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center mt-8">
                                <CTAButton slug={slug} destination={destino.fields.id} variant="primary" size="lg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-1 space-y-6">
                                {(salidasDiarias || diasDeSalidas) && (
                                    <div className="flex items-center gap-3 bg-accent-50 rounded-xl p-4 border border-accent-200">
                                        <CalendarDaysIcon className="w-5 h-5 text-accent-600" />
                                        <span className="font-semibold text-accent-800">
                                            {salidasDiarias ? 'Salidas Diarias' : diasDeSalidas}
                                        </span>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                                        <GlobeAmericasIcon className="w-5 h-5 text-primary-500 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Países</h3>
                                            <p className="text-sm text-neutral-600">{paises.map(pais => pais.fields?.nombre ?? '').join(', ')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                                        <MapPinIcon className="w-5 h-5 text-secondary-500 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-neutral-900 mb-1">Ciudades</h3>
                                            <p className="text-sm text-neutral-600">{ciudades.map(ciudad => ciudad.fields?.nombre).join(', ')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 bg-accent-100 text-accent-800 px-4 py-3 rounded-xl text-sm font-medium">
                                        <CheckBadgeIcon className="w-4 h-4" />
                                        Mejor Precio Garantizado
                                    </div>
                                    <div className="flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-3 rounded-xl text-sm font-medium">
                                        <ClockIcon className="w-4 h-4" />
                                        Asistencia en tu Viaje
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="relative">
                                    <ActionButtons experience={experience} />

                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            alt={`${nombre} - Paquete de viaje a ${destino.fields.nombre}`}
                                            priority={true}
                                            src={urlImagen}
                                            width={800}
                                            height={449}
                                            className="w-full object-contain"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Sections - Sin separación */}
            <div className="bg-white">
                <ExperienceTabs experience={experience} />
            </div>

            {/* Marquee with promotions */}
            <Marquee
                texts={[
                    "✈️ Incluye vuelo + hotel + tours*",
                    "🌟 Reserva ahora y paga después",
                    "📞 Asesoría personalizada gratuita",
                    "💰 Mejor precio garantizado"
                ]}
                backgroundColor="bg-primary-900"
                textColor="text-white"
                speed={30}
            />

            <Benefits />
            <HotelQuotation />
            <FAQs />
            
            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <QuotationButton slug={slug} destination={destino.fields.id} />
            </div>
        </>
    )
}