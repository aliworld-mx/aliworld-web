
import { Breadcrumbs } from '@/app/_components/Breadcrumbs';
import { FAQs } from '@/app/_components/FAQs';
import { TripGrid } from '@/app/_components/TripGrid'
import { Metadata } from 'next';
import { OfferCatalog, WithContext } from 'schema-dts';
import { getFavorites } from '../lib/getFavorites';
import { Suspense } from 'react';

export const revalidate = 3600;

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

export default async function FavoritosPage() {
    const favorites = await getFavorites();

    const structuredData: WithContext<OfferCatalog> = {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: `Paquetes de viaje favoritos`,
        url: `https://www.aliworld.mx/favoritos`,
        itemListElement: favorites?.fields?.paquetes.map((trip) => {
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
                <Suspense>
                    <TripGrid header='Nuestros paquetes favoritos' trips={favorites?.fields.paquetes ?? []} />
                </Suspense>
            </div>
            <FAQs />
        </>
    )
}