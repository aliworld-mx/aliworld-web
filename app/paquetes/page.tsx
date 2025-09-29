import { getDestinations } from '../lib/getDestinations';
import Benefits from '../_components/Benefits';
import { FAQs } from '../_components/FAQs';
import { ItemList, WithContext, Organization, WebSite } from 'schema-dts';
import { Metadata } from 'next';
import { Breadcrumbs } from '../_components/Breadcrumbs';
import { Suspense } from 'react';
import DestinationsList from './_components/DestinationsList';

export const revalidate = 2629746;

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
    const destinations = await getDestinations();
    const destinationCount = destinations?.length || 0;
    
    return {
        title: `Paquetes de Viaje a ${destinationCount} Destinos | Aliworld`,
        description: `Descubre los mejores paquetes de viaje a ${destinationCount} destinos únicos en todo el mundo. Ofertas exclusivas, reserva fácil y experiencias inolvidables al mejor precio.`,
        keywords: [
            'viajes', 'paquetes de viaje', 'cruceros', 'hoteles', 'reservaciones', 
            'aliworld', 'turismo', 'vacaciones', 'ofertas de viaje', 'destinos internacionales',
            'paquetes todo incluido', 'viajes organizados', 'tours', 'escapadas'
        ],
        authors: [{ name: 'Aliworld' }],
        creator: 'Aliworld',
        publisher: 'Aliworld',
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            type: 'website',
            url: 'https://www.aliworld.mx/paquetes',
            title: `Paquetes de Viaje a ${destinationCount} Destinos | Aliworld`,
            siteName: 'Aliworld',
            description: `Encuentra los mejores paquetes de viaje a ${destinationCount} destinos únicos. ¡Reserva tu próxima aventura con ofertas exclusivas!`,
            images: [
                {
                    url: 'https://www.aliworld.mx/paquetes.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Paquetes de Viaje - Aliworld',
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@aliworld_mx',
            creator: '@aliworld_mx',
            title: `Paquetes de Viaje a ${destinationCount} Destinos | Aliworld`,
            description: `Descubre ${destinationCount} destinos únicos con nuestros paquetes de viaje. ¡Ofertas exclusivas te esperan!`,
            images: ['https://www.aliworld.mx/paquetes.jpg'],
        },
        alternates: {
            canonical: 'https://www.aliworld.mx/paquetes',
        },
        category: 'Travel',
        classification: 'Travel Packages and Tours',
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
                <Breadcrumbs breadcrumbs={[
                    { name: 'Inicio', href: '/' },
                    { name: 'Paquetes', href: '/paquetes' }
                ]} />
                <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <header className="mb-10 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            Paquetes de Viaje a los mejores destinos
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Descubre ofertas exclusivas y vive experiencias únicas en todo el mundo. Reserva tu paquete ideal con Aliworld.
                        </p>
                    </header>
                    <section aria-label="Listado de destinos de viaje">
                        <Suspense fallback={
                            <div className="animate-pulse">
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                                            <div className="aspect-square w-full bg-gray-200 rounded-t-lg sm:aspect-2/3"></div>
                                            <div className="p-4 space-y-2">
                                                <div className="h-6 bg-gray-200 rounded-md"></div>
                                                <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }>
                            <DestinationsList destinations={destinations} />
                        </Suspense>
                    </section>
                </div>
            </div>
            <Benefits />
            <FAQs />
        </>
    )
}