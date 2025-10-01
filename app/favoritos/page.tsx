
import { Breadcrumbs } from '@/app/_components/Breadcrumbs';
import { FAQs } from '@/app/_components/FAQs';
import { FavoritesGrid } from '@/app/_components/FavoritesGrid';
import { Metadata } from 'next';
import { Suspense } from 'react';
import HotelQuotation from '../_components/HotelQuotation';

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

export default function FavoritosPage() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Paquetes Favoritos - Aliworld',
        description: 'Tus paquetes de viaje favoritos guardados para consulta rápida',
        url: 'https://www.aliworld.mx/favoritos',
        mainEntity: {
            '@type': 'ItemList',
            name: 'Lista de Favoritos',
            description: 'Paquetes de viaje guardados como favoritos'
        }
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="bg-white">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <Suspense fallback={
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="bg-gray-200 rounded-xl h-96"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                }>
                    <FavoritesGrid />
                </Suspense>
            </div>
            <HotelQuotation />
            <FAQs />
        </>
    )
}