
import { Breadcrumbs } from '@/app/_components/Breadcrumbs';
import { FAQs } from '@/app/_components/FAQs';
import { TripGrid } from '@/app/_components/TripGrid'
import { Metadata } from 'next';
import { OfferCatalog, WithContext } from 'schema-dts';
import { getPromos } from '../lib/getPromos';

export const revalidate = 3600;

export const metadata: Metadata = {
    title: `Promociones de Paquetes de Viaje | Aliworld`,
    description: `Descubre los paquetes de viaje con el mejor precio`,
    openGraph: {
        type: 'website',
        url: `https://www.aliworld.mx/promociones`,
        title: `Promociones de Paquetes de Viaje | Aliworld`,
        siteName: 'Aliworld',
        description: `Descubre los paquetes de viaje con el mejor precio`,
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

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="bg-white">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <TripGrid header='Nuestros paquetes con descuento' trips={promos?.fields.paquetes ?? []} />
            </div>
            <FAQs />
        </>
    )
}