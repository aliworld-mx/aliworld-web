import Image from 'next/image'
import Link from 'next/link';
import { getDestinations } from '../lib/getDestinations';
import Benefits from '../_components/Benefits';
import { FAQs } from '../_components/FAQs';
import { ItemList, WithContext } from 'schema-dts';
import { Metadata } from 'next';
import { Breadcrumbs } from '../_components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Paquetes de Viaje | Aliworld',
    description: 'Descubre los mejores paquetes de viaje a todo el mundo al mejor precio. ¡Reserva ya!',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/paquetes',
        title: "Aliworld - Paquetes de viaje a todo el mundo al mejor precio",
        siteName: 'Aliworld',
        description: "Encuentra los mejores paquetes de viaje a todo el mundo al mejor precio. ¡Reserva ya!",
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/paquetes',
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
        name: 'Paquetes',
        href: '/paquetes',
    },
]

export default async function PaquetesPage() {
    const destinations = await getDestinations();

    const structuredData: WithContext<ItemList> = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: "Listado de Destinos de Paquetes de Viaje",
        url: 'https://www.aliworld.mx/paquetes',
        itemListElement: destinations.map((destination, index) => {
            const { id, nombre, imagen, descripcion } = destination.fields;
            const { url } = imagen.fields.file!;
            const imageUrl = `https:${url}`;

            return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    "@type": "Place",
                    "name": nombre as string,
                    "url": `https://www.aliworld.mx/paquetes/${id}`,
                    "image": imageUrl as string,
                    "description": descripcion as string
                }
            }
        })
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className="bg-white">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
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
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {destinations?.map((destination) => {
                                const { id, nombre, descripcion, imagen } = destination.fields;
                                const { url } = imagen.fields.file!;
                                const imageUrl = `https:${url}`;

                                return (
                                    <Link key={id} href={`paquetes/${id}`} className="group block rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 bg-white border border-gray-100 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400">
                                        <div className="relative">
                                            <Image
                                                alt={imagen.fields.description ?? nombre}
                                                src={imageUrl}
                                                width={400}
                                                height={800}
                                                className="aspect-square w-full overflow-hidden rounded-t-lg object-cover sm:aspect-2/3 transition duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-4 flex flex-col gap-2">
                                            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 line-clamp-2">{nombre}</h2>
                                            <p className="text-sm italic text-gray-500 line-clamp-3">{descripcion}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>
            <Benefits />
            <FAQs />
        </>
    )
}