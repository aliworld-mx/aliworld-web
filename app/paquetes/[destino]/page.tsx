
import { PageProps } from '@/.next/types/app/page';
import { FAQs } from '@/app/_components/FAQs';
import { TripGrid } from '@/app/_components/TripGrid'
import { getTrips } from '@/app/lib/getTrips';
import { OfferCatalog, WithContext } from 'schema-dts';

export const revalidate = 3600;

export default async function DestinosPage({ params }: PageProps) {
    const { destino } = await params;
    const trips = await getTrips(destino);

    const structuredData: WithContext<OfferCatalog> = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: `Paquetes de ${destino}`,
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
                        name: ciudad.fields.nombre
                    }))
                }
            }
        })
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="bg-white">
                <TripGrid destination={destino} trips={trips} />
            </div>
            <FAQs />
        </>
    )
}