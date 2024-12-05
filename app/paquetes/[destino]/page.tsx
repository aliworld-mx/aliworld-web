
import { PageProps } from '@/.next/types/app/page';
import { Breadcrumbs } from '@/app/_components/Breadcrumbs';
import { FAQs } from '@/app/_components/FAQs';
import { TripGrid } from '@/app/_components/TripGrid'
import { getDestinationNameBySlug } from '@/app/_utils/getDestinationNameBySlug';
import { getTrips } from '@/app/lib/getTrips';
import { Metadata } from 'next';
import { OfferCatalog, WithContext } from 'schema-dts';

export const revalidate = 3600;

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { destino } = await params;
    const formattedDestination = getDestinationNameBySlug(destino);

    return {
        title: `Paquetes de ${formattedDestination} | Aliworld`,
        description: `Descubre los paquetes de ${formattedDestination}`,
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/paquetes/${destino}`,
            title: `Paquetes de ${formattedDestination} | Aliworld`,
            siteName: 'Aliworld',
            description: `Descubre los paquetes de ${formattedDestination}`,
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
        name: `Paquetes de ${formattedDestination}`,
        url: `https://www.aliworld.mx/paquetes/${destino}`,
        itemListElement: trips.map((trip) => {
            const { id, nombre, imagen, precio, moneda, dias, ciudades } = trip.fields;
            const { url } = imagen.fields.file!;
            const imageUrl = `https:${url}`;

            return {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Trip',
                    name: nombre as string,
                    url: `https://www.aliworld.mx/experiencia/${id}`,
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

    const breadcrumbs = [
        {
            name: 'Inicio',
            href: '/',
        },

        {
            name: 'Destinos',
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
                <TripGrid header={`Nuestros Paquetes a ${getDestinationNameBySlug(destino)}`} trips={trips} />
            </div>
            <FAQs />
        </>
    )
}