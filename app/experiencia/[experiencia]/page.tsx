import { SunIcon, MoonIcon, CreditCardIcon, CalendarDaysIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { getTrip } from '@/app/lib/getTrip'
import { toMoney } from '@/app/_utils/toMoney'
import { PriceTable } from '@/app/_components/PriceTable'
import Image from 'next/image'
import { PriceDisclaimer } from '@/app/_components/PriceDisclaimer'
import Benefits from '@/app/_components/Benefits'
import { Newsletter } from '@/app/_components/Newsletter'
import { Breadcrumbs } from '@/app/_components/Breadcrumbs'
import { Itinerary } from '@/app/_components/Itinerary'
import { Hotels } from '@/app/_components/Hotels'
import { Trip, WithContext } from 'schema-dts'

export default async function ExperienciaPage({ params }: ({ params: { experiencia: string } })) {
    const { experiencia } = await params;
    const experience = await getTrip(experiencia);
    const { nombre, precio, dias, noches, imagen, moneda, precios, destino, ciudades, paises, itinerario, hoteles } = experience.fields;
    const { url } = imagen.fields.file;
    const imageUrl = `https:${url}`;

    const structuredData: WithContext<Trip> = {
        '@context': 'https://schema.org',
        '@type': 'Trip',
        name: nombre,
        url: `https://www.aliworld.mx/experiencia/${experiencia}`,
        image: imageUrl,
        price: precio,
        priceCurrency: moneda,
        validFrom: '2024-12-01',
        duration: `P${dias}D`,
        destination: ciudades?.map((ciudad) => ({
            '@type': 'City',
            name: ciudad.fields.nombre
        }))
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:max-w-lg lg:self-start">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
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
                            <p className="text-lg text-gray-900 sm:text-xl">{toMoney(precio)} {moneda} + Impuestos + Suplementos</p>
                        </div>
                        <div className='space-y-4'>
                        <p className="text-gray-600 text-sm">Por adulto en habitación doble</p>
                        <p className="text-gray-700 text-base">Países que se visitan: {paises.map(pais => pais.fields.nombre).join(', ')}</p>
                        <p className="text-gray-700 text-base">Ruta de Ciudades que se visitan: {ciudades.map(ciudad => ciudad.fields.nombre).join(', ')}</p>
                        </div>
                    </section>
                </div>

                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <Image
                        alt={imagen.fields.description}
                        priority={true}
                        src={imageUrl}
                        width={800}
                        height={800}
                        className="aspect-square w-full rounded-lg object-cover" />
                </div>

                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Product options
                        </h2>

                        <div className="mt-10">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Cotizar
                            </button>
                        </div>
                        <div className="mt-6 text-center">
                            <div className="group inline-flex text-base font-medium">
                                <CreditCardIcon
                                    aria-hidden="true"
                                    className="mr-2 size-6 shrink-0 text-sky-500 group-hover:text-sky-700"
                                />
                                <span className="text-gray-500 hover:text-gray-700">Pagos con Tarjeta de Credito y Debito</span>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="mt-10 lg:col-start-1 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="itinerary-heading">
                        <h2 id="itinerary-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                            <CalendarDaysIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                            Itinerario
                        </h2>
                        <div className='text-gray-900 mt-6'>
                            <Itinerary itinerario={itinerario} />
                        </div>
                    </section>
                </div>
                <div className="mt-10 lg:col-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="tariff-heading">
                        <h2 id="tariff-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                            <CurrencyDollarIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                            Tarifas
                        </h2>
                        <PriceTable precios={precios} />
                        <PriceDisclaimer />
                    </section>
                </div>
            </div>
            <Hotels hoteles={hoteles} />
            <Benefits />
            <Newsletter />
        </div>
    )
}

export const revalidate = 60 * 30; 