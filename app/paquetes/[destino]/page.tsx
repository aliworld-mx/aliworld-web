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

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { destino } = await params;
    const formattedDestination = getDestinationNameBySlug(destino);

    return {
        title: `Paquetes de Viaje a ${formattedDestination} | Aliworld`,
        description: `Descubre los paquetes de viaje a ${formattedDestination}`,
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/paquetes/${destino}`,
            title: `Paquetes de Viaje a ${formattedDestination} | Aliworld`,
            siteName: 'Aliworld',
            description: `Descubre los paquetes de viaje a ${formattedDestination}`,
        },
        alternates: {
            canonical: `https://www.aliworld.mx/paquetes/${destino}`,
        },
        generator: 'Next.js',
        keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
        robots: 'index, follow',
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
            const { slug, nombre, imagen, precio, moneda, dias, ciudades } = trip.fields;
            const { url } = imagen.fields.file!;
            const imageUrl = `https:${url}`;

            return {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Trip',
                    name: nombre as string,
                    url: `https://www.aliworld.mx/paquetes/${destino}/${slug}`,
                    image: imageUrl as string,
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
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <main className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
                    <header className="mb-10 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            Paquetes de Viaje a {formattedDestination}
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Explora nuestros paquetes cuidadosamente seleccionados para {formattedDestination}. Vive experiencias únicas, reserva con flexibilidad y recibe atención personalizada en cada paso de tu viaje.
                        </p>
                    </header>
                    <section aria-label={`Paquetes de viaje disponibles para ${formattedDestination}`}>
                        <Suspense>
                            <TripGrid header="" trips={trips} />
                        </Suspense>
                        {trips.length === 0 && (
                            <div className="text-center py-16 text-gray-500 text-lg">
                                No hay paquetes disponibles para este destino en este momento. ¡Contáctanos para una cotización personalizada!
                            </div>
                        )}
                    </section>
                </main>
            </div>
            <HotelQuotation />
            <FAQs />
        </>
    )
}