import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { getTrip } from '@/app/lib/getTrip'
import { toMoney } from '@/app/_utils/toMoney'
import Image from 'next/image'
import Benefits from '@/app/_components/Benefits'
import { Breadcrumbs } from '@/app/_components/Breadcrumbs'
import { Trip, WithContext } from 'schema-dts'
import { Metadata } from 'next'
import { PageProps } from '@/.next/types/app/page'
import { FAQs } from '@/app/_components/FAQs'
import ExperienceTabs from '@/app/_components/Experiences/ExperienceTabs'
import HotelQuotation from '@/app/_components/HotelQuotation'
import { QuotationButton } from '@/app/_components/QuotationButton'

export const revalidate = 36000;

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { paquete } = await params;
    const experience = await getTrip(paquete);
    const { nombre, imagen, destino, slug } = experience.fields;
    const { url } = imagen.fields.file!;
    const imageUrl = `https:${url}`;

    return {
        title: `${nombre} - ${destino.fields.nombre} | Aliworld`,
        description: `Descubre ${destino.fields.nombre} en el paquete de viaje ${nombre} de Aliworld. Incluye vuelo, hotel y tours. ¡Reserva ahora!`,
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
            title: `${nombre} - ${destino.fields.nombre} | Aliworld`,
            images: [
                {
                    url: imageUrl,
                    alt: nombre,
                },
            ],
            siteName: 'Aliworld',
            description: `Descubre ${destino.fields.nombre} en el paquete de viaje ${nombre} de Aliworld. Incluye vuelo, hotel y tours. ¡Reserva ahora!`,
        },
        alternates: {
            canonical: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
        },
        generator: 'Next.js',
        keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
        robots: 'index, follow',
    }
}

export default async function PaquetePage({ params }: PageProps) {
    const { paquete } = await params;
    const experience = await getTrip(paquete);
    const { nombre, slug, precio, dias, noches, imagen, moneda, destino, ciudades, paises, salidasDiarias, diasDeSalidas } = experience.fields;
    const { url } = imagen.fields.file!;
    const imageUrl = `https:${url}`;

    const structuredData: WithContext<Trip> = {
        '@context': 'https://schema.org',
        '@type': 'Trip',
        name: nombre,
        url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
        image: imageUrl,
        provider: {
            '@type': 'Organization',
            name: 'Aliworld',
        },
        itinerary: {
            '@type': 'ItemList',
            itemListElement: ciudades.map((ciudad, index) => ({
                '@type': 'Trip',
                position: index + 1,
                item: {
                    '@type': 'Place',
                    name: ciudad.fields?.nombre,
                },
            })),
        },
        offers: {
            '@type': 'Offer',
            price: precio,
            priceCurrency: moneda,
            validFrom: '2024-12-01',
            category: 'Travel',
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
            },
            url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
        }
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
            <main id="paquete-main" tabIndex={-1} className="bg-gradient-to-br from-sky-50 via-white to-sky-100 min-h-screen">
                <div className="bg-white">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                    <div className="mx-auto max-w-2xl px-4 pt-6 pb-12 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8">
                        <div className="lg:max-w-lg lg:self-start">
                            <div className="ml-auto flex items-center justify-around rounded-full w-64 bg-sky-600 text-white px-4 py-3 shadow-lg ring-1 ring-sky-100/60">
                                <div className="flex items-center">
                                    <SunIcon aria-hidden="true" className="size-5 shrink-0 text-white" />
                                    <span className="ml-2 text-base font-medium text-white">{dias} Días</span>
                                </div>
                                <div className="flex items-center">
                                    <MoonIcon aria-hidden="true" className="size-5 shrink-0 text-white" />
                                    <span className="ml-2 text-base font-medium text-white">{noches} Noches</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-2">{nombre}</h1>
                                <div className="h-1 w-16 bg-sky-600 rounded mb-4" aria-hidden="true" />
                            </div>
                            <section aria-labelledby="information-heading" className="mt-6">
                                <h2 id="information-heading" className="sr-only">
                                    Información del paquete
                                </h2>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="inline-block rounded bg-sky-100 px-3 py-1 text-sky-700 font-semibold text-lg shadow-sm">
                                        {toMoney(precio)} {moneda}
                                    </span>
                                    <span className="text-sm text-gray-700 ml-2">+ Impuestos</span>
                                </div>
                                <div className='space-y-3 mt-4 text-base'>
                                    <p className="text-gray-600 text-sm">Por adulto</p>
                                    {(salidasDiarias && !diasDeSalidas) && <p className="text-sky-700 font-bold">Salidas Diarias</p>}
                                    {diasDeSalidas && <p className="text-sky-700 font-bold">{diasDeSalidas}</p>}
                                    <p className="text-gray-700">Países: <span className="font-medium text-gray-900">{paises.map(pais => pais.fields?.nombre ?? '').join(', ')}</span></p>
                                    <p className="text-gray-700">Ciudades: <span className="font-medium text-gray-900">{ciudades.map(ciudad => ciudad.fields?.nombre).join(', ')}</span></p>
                                </div>
                            </section>
                        </div>
                        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center relative">
                            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                                <Image
                                    alt={imagen.fields.description ?? nombre}
                                    priority={true}
                                    src={imageUrl}
                                    width={592}
                                    height={332}
                                    className="w-full h-auto rounded-2xl object-cover transition group-hover:scale-105 duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                            <section aria-labelledby="options-heading">
                                <h2 id="options-heading" className="sr-only">
                                    Información del paquete
                                </h2>
                                <div className="mt-10">
                                    <QuotationButton slug={slug} destination={destino.fields.id} />
                                </div>
                            </section>
                        </div>
                    </div>
                    <ExperienceTabs experience={experience} />
                    <Benefits />
                    <HotelQuotation />
                    <FAQs />
                </div>
            </main>
        </>
    )
}

