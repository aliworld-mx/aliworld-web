

import Image from 'next/image'
import { Breadcrumbs } from '@/app/_components/Breadcrumbs'
import { PageProps } from '@/.next/types/app/page'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Socials from '@/app/_components/Socials'
import { getGuide } from '@/app/lib/getGuide'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTripsByCity } from '@/app/lib/getTripsByCity'
import { toMoney } from '@/app/_utils/toMoney'
import { Catalog } from '@/app/_components/Catalog'
import { getBlogPostsByCity } from '@/app/lib/getBlogPostsByCity'

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { ciudad } = await params;
    const guia = await getGuide(ciudad);
    const { nombreDeCiudad, imagenContenido, slug } = guia.fields;
    const url = imagenContenido.fields.file?.url;
    const imageUrl = `https:${url}`;

    return {
        title: `Guia de Ciudad - ${nombreDeCiudad} - Actividades, Comida y Consejos | Aliworld`,
        description: `Descubre la guía completa de ${nombreDeCiudad} con actividades, comida y consejos útiles. Explora los mejores lugares y experiencias en esta increíble ciudad con Aliworld.`,
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/ciudades/${slug}`,
            title: `Guia de Ciudad - ${nombreDeCiudad} - Actividades, Comida y Consejos | Aliworld`,
            images: [
                {
                    url: imageUrl,
                    alt: nombreDeCiudad,
                },
            ],
            siteName: 'Aliworld',
            description: `Descubre la guía completa de ${nombreDeCiudad} con actividades, comida y consejos útiles. Explora los mejores lugares y experiencias en esta increíble ciudad con Aliworld.`,
        },
        alternates: {
            canonical: `https://www.aliworld.mx/ciudades/${slug}`,
        },
        generator: 'Next.js',
        keywords: ['viajes', 'paquetes de viaje', slug, 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
        robots: 'index, follow',
    }
}

export default async function CiudadPage({ params }: PageProps) {
    const { ciudad } = await params;
    const guia = await getGuide(ciudad);
    const {
        nombreDeCiudad,
        url,
        contenido,
        contenidoActividades,
        contenidoPlatillos,
        imagenContenido,
        imagenEncabezado,
        encabezado,
        subEncabezado,
        descripcion,
        actividades,
        platillos,
        slug,
        preguntasFrecuentes,
    } = guia.fields;
    const trips = await getTripsByCity(slug);
    const posts = await getBlogPostsByCity(slug);

    const headerImage = `https:${imagenEncabezado?.fields?.file?.url}`;
    const contentImage = `https:${imagenContenido?.fields?.file?.url}`;

    const breadcrumbs = [
        {
            name: 'Inicio',
            href: '/',
        },
        {
            name: 'Guías de Ciudades',
            href: '/ciudades',
        },
        {
            name: nombreDeCiudad,
            href: `/ciudades/${slug}`,
        },
    ]

    return (
        <div className="bg-white">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="relative isolate">
                <div className="mx-auto max-w-7xl px-6 pb-16 pt-4 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                            {encabezado}
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            {descripcion}
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href={url}
                                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                            >
                                Ver Paquetes de Viaje a {nombreDeCiudad}
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                        <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-2xl">
                            <title>{imagenEncabezado.fields.description}</title>
                            <defs>
                                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                    <rect rx={36} width={316} height={684} />
                                </clipPath>
                            </defs>
                            <path
                                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                fill="#4B5563"
                            />

                            <foreignObject
                                width={316}
                                height={685}
                                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                                transform="translate(24 24)"
                            >
                                <Image alt={imagenEncabezado.fields.description ?? ""} src={headerImage} width={316} height={685} priority={true} />
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-base/7 font-semibold text-sky-600">Experimenta {nombreDeCiudad}</h2>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
                            {subEncabezado}
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            {contenido}
                        </p>
                    </div>
                </div>
                <div className="relative pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <Image
                            alt={imagenContenido.fields.description ?? ""}
                            src={contentImage}
                            width={1216}
                            height={676}
                            className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">¿Qué hacer en {nombreDeCiudad}?</h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            {contenidoActividades}
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 list-none lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {actividades.map((actividad) => {
                            const activityImage = `https:${actividad.fields.imagen?.fields?.file?.url}`;

                            return (
                                <li key={actividad.sys.id} className='m-0 list-none'>
                                    <Image alt={actividad.fields.imagen.fields.description ?? ""} src={activityImage} className="aspect-3/2 w-full h-[202px] rounded-2xl object-cover lg:h-[242px]" width={384} height={242} />
                                    <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">{actividad.fields.titulo}</h3>
                                    <p className="text-base/7 mb-4 text-gray-600">{actividad.fields.contenido}</p>
                                    {actividad.fields.url && (
                                        <Link href={actividad.fields.url} className="cursor-pointer font-semibold text-sky-600 hover:text-sky-700 group">
                                            Comprar Entradas <ArrowRightIcon className="h-4 w-4 inline-block transition flex-shrink-0 text-sky-600 group-hover:text-sky-700 group-hover:translate-x-1" aria-hidden="true" />
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">¿Qué comer en {nombreDeCiudad}?</h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            {contenidoPlatillos}
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 list-none lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    >
                        {platillos.map((platillo) => {
                            const foodImage = `https:${platillo.fields.imagen?.fields?.file?.url}`;
                            return (
                                <li key={platillo.sys.id} className='m-0 list-none'>
                                    <Image alt={platillo.fields.imagen.fields.description ?? ""} src={foodImage} className="aspect-3/2 w-full h-[202px] rounded-2xl object-cover lg:h-[242px]" width={384} height={242} />
                                    <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{platillo.fields.titulo}</h3>
                                    <p className="text-base/7 text-gray-600">{platillo.fields.descripcion}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <section className='bg-white py-24 sm:py-32'>
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-24 lg:px-8">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Nuestros paquetes a {nombreDeCiudad}</h2>
                        <Link href={url} className="hidden text-sm font-semibold group text-sky-600 hover:text-sky-500 sm:block">
                            Ver todos los paquetes
                            <ArrowRightIcon className="h-4 w-4 ml-2 inline-block transition group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 mt-12 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
                        {trips?.map((trip) => (
                            <div key={trip.fields?.id} className="group relative">
                                <Image
                                    alt={trip.fields?.imagen?.fields?.description ?? trip.fields?.nombre}
                                    src={`https:${trip.fields?.imagen?.fields?.file?.url}`}
                                    width={300}
                                    height={300}
                                    className="w-full rounded-lg object-fit group-hover:opacity-75"
                                />
                                <h3 className="mt-4 text-base font-semibold text-gray-900">
                                    <Link href={`/paquetes/${trip.fields.destino.fields.id}/${trip.fields.slug}`}>
                                        <span className="absolute inset-0" />
                                        {trip.fields?.nombre}
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Desde: {toMoney(trip?.fields?.precio)} {trip?.fields?.moneda} + Impuestos y Suplementos</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 sm:hidden">
                        <Link href={url} className="block text-sm font-semibold group text-sky-600 hover:text-sky-500">
                            Ver todos los paquetes
                            <ArrowRightIcon className="h-4 w-4 ml-2 inline-block transition group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                                Preguntas Frecuentes sobre {nombreDeCiudad}
                            </h2>
                        </div>
                        <div className="mt-10 lg:col-span-7 lg:mt-0">
                            <dl className="space-y-10">
                                {preguntasFrecuentes.map((faq) => (
                                    <div key={faq.sys.id}>
                                        <dt className="text-base/7 font-semibold text-gray-900">{faq.fields.pregunta}</dt>
                                        <dd className="mt-2 text-base/7 text-gray-600">{faq.fields.respuesta}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-sky-700">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                            ¿Listo para viajar a {nombreDeCiudad}?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-sky-200">
                            Reserva tu paquete de viaje a {nombreDeCiudad} que incluye vuelo, hotel y tours. ¡No te pierdas la oportunidad de explorar esta increíble ciudad!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href={url}
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-sky-600 shadow-xs hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Ver Paquetes de Viaje a {nombreDeCiudad}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Socials />
            <Catalog />
            <section className='bg-white py-24 sm:py-32'>
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-24 lg:px-8">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Conoce más sobre {nombreDeCiudad}</h2>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts?.map((post) => {
                            const {
                                titulo,
                                descripcion,
                                fecha,
                                portada,
                                slug,
                            } = post.fields;

                            return (
                                <Link href={`/blog/${slug}`} key={slug} className="group">
                                    <article key={slug} className="flex flex-col items-start justify-between">
                                        <div className="relative w-full">
                                            <Image
                                                alt={descripcion}
                                                src={`https:${portada.fields?.file?.url}`}
                                                width={800}
                                                height={450}
                                                className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:opacity-75"
                                            />
                                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="max-w-xl">
                                            <div className="mt-8 flex items-center gap-x-4 text-xs">
                                                <time dateTime={fecha} className="text-gray-500">
                                                    {fecha}
                                                </time>
                                            </div>
                                            <div className="relative">
                                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:underline">
                                                    <span className="absolute inset-0" />
                                                    {titulo}
                                                </h3>
                                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{descripcion}</p>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

