import { SunIcon, MoonIcon, CreditCardIcon } from '@heroicons/react/20/solid'
import { getTrip } from '@/app/lib/getTrip'
import { toMoney } from '@/app/_utils/toMoney'
import Image from 'next/image'
import Benefits from '@/app/_components/Benefits'
import { Breadcrumbs } from '@/app/_components/Breadcrumbs'
import { Trip, WithContext } from 'schema-dts'
import { Metadata } from 'next'
import { PageProps } from '@/.next/types/app/page'
import { FAQs } from '@/app/_components/FAQs'
import { QuotationForm } from '@/app/_components/QuotationForm'
import ExperienceTabs from '@/app/_components/Experiences/ExperienceTabs'

export const revalidate = 3600;

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { experiencia } = await params;
    const experience = await getTrip(experiencia);
    const { nombre, imagen, destino } = experience.fields;
    const { url } = imagen.fields.file!;
    const imageUrl = `https:${url}`;

    return {
        title: `${nombre} - ${destino.fields.nombre} | Aliworld`,
        description: `Descubre ${nombre} en ${destino.fields.nombre}`,
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/experiencia/${experiencia}`,
            title: `${nombre} - ${destino.fields.nombre} | Aliworld`,
            images: [
                {
                    url: imageUrl,
                    alt: nombre,
                },
            ],
            siteName: 'Aliworld',
            description: `Descubre ${nombre} en ${destino.fields.nombre}`,
        },
        alternates: {
            canonical: `https://www.aliworld.mx/experiencia/${experiencia}`,
        },
        generator: 'Next.js',
        keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
        robots: 'index, follow',
    }
}

export default async function ExperienciaPage({ params }: PageProps) {
    const { experiencia } = await params;
    const experience = await getTrip(experiencia);
    const { nombre, precio, dias, noches, imagen, moneda, destino, ciudades, paises, salidas, salidasDiarias } = experience.fields;
    const { url } = imagen.fields.file!;
    const imageUrl = `https:${url}`;

    const structuredData: WithContext<Trip> = {
        '@context': 'https://schema.org',
        '@type': 'Trip',
        name: nombre,
        url: `https://www.aliworld.mx/experiencia/${experiencia}`,
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
            availability: 'InStock',
            url: `https://www.aliworld.mx/experiencia/${experiencia}`
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
            href: `/experiencia/${experiencia}`,
        },
    ]

    return (
        <div className="bg-white">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="mx-auto max-w-2xl px-4 pt-6 pb-12 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:max-w-lg lg:self-start">
                    <div className='mt-4 ml-auto flex items-center justify-around rounded-full w-60 bg-sky-600 text-white px-2 py-3'>
                        <div className="flex items-center">
                            <SunIcon aria-hidden="true" className="size-5 shrink-0 text-yellow-200" />
                            <p className="ml-2 text-sm text-gray-100">Días: {dias}</p>
                        </div>
                        <div className="flex items-center">
                            <MoonIcon aria-hidden="true" className="size-5 shrink-0 text-purple-200" />
                            <p className="ml-2 text-sm text-gray-100">Noches: {noches}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-3xl underline decoration-sky-600 font-bold tracking-tight text-gray-900 sm:text-4xl">{nombre}</h1>
                    </div>
                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Información del paquete
                        </h2>
                        <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-xl">{toMoney(precio)} {moneda} + Impuestos</p>
                        </div>
                        <div className='space-y-4'>
                            <p className="text-gray-600 text-sm">Por adulto en habitación doble</p>
                            {salidasDiarias && <p className="text-gray-700 font-bold text-base">Salidas Diarias</p>}
                            <p className="text-gray-700 text-base">Países que se visitan: {paises.map(pais => pais.fields?.nombre ?? '').join(', ')}</p>
                            <p className="text-gray-700 text-base">Ruta de Ciudades que se visitan: {ciudades.map(ciudad => ciudad.fields?.nombre).join(', ')}</p>
                        </div>
                    </section>
                </div>

                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <Image
                        alt={imagen.fields.description ?? nombre}
                        priority={true}
                        src={imageUrl}
                        width={800}
                        height={800}
                        className="aspect-square w-full rounded-lg object-cover" />
                </div>

                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Información del paquete
                        </h2>
                        <div className="mt-10">
                            <QuotationForm packageId={experiencia} departures={salidas} dailyDepartures={salidasDiarias} />
                        </div>
                        <div className="mt-6 text-center">
                            <div className="group inline-flex text-base font-medium">
                                <CreditCardIcon
                                    aria-hidden="true"
                                    className="mr-2 size-6 shrink-0 text-sky-500 group-hover:text-sky-700"
                                />
                                <span className="text-gray-500 hover:text-gray-700">Pagos Seguros con Tarjeta de Credito y Debito</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <ExperienceTabs experience={experience} />
            <Benefits />
            <FAQs />
        </div>
    )
}

