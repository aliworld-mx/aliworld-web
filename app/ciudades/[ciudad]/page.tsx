import Image from 'next/image'
import { Breadcrumbs } from '@/app/_components/Breadcrumbs'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Socials from '@/app/_components/Socials'
import { getGuide } from '@/app/lib/getGuide'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTripsByCity } from '@/app/lib/getTripsByCity'
import { Catalog } from '@/app/_components/Catalog'
import { getBlogPostsByCity } from '@/app/lib/getBlogPostsByCity'
import { TripGridItem } from '@/app/_components/TripGridItem'

export const revalidate = 2629746; // 1 mes en segundos

interface PageProps {
    params: Promise<{ ciudad: string }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { ciudad } = await params;
    const guia = await getGuide(ciudad);
    const { nombreDeCiudad, imagenContenido, slug, encabezado, descripcion, actividades, platillos } = guia.fields;
    const url = imagenContenido.fields.file?.url;
    const imageUrl = `https:${url}`;
    
    // Keywords dinámicas basadas en contenido
    const activityKeywords = actividades.map(a => a.fields.titulo.toLowerCase()).slice(0, 5);
    const foodKeywords = platillos.map(p => p.fields.titulo.toLowerCase()).slice(0, 5);
    
    const dynamicKeywords = [
        'viajes', 'turismo', 'qué hacer', 'guía de viaje', 'destinos',
        nombreDeCiudad.toLowerCase(), 
        slug,
        'actividades', 'comida típica', 'lugares turísticos',
        'paquetes de viaje', 'tours', 'hoteles', 'reservaciones',
        'consejos de viaje', 'itinerario', 'atracciones',
        ...activityKeywords,
        ...foodKeywords,
        'aliworld'
    ];
    
    // Descripción enriquecida para SEO
    const enhancedDescription = `Guía completa de ${nombreDeCiudad}: ¿Qué hacer, dónde comer y qué visitar? Descubre las mejores actividades, platillos típicos y consejos para tu viaje. Encuentra paquetes turísticos desde ${nombreDeCiudad} con Aliworld.`;

    return {
        title: `¿Qué hacer en ${nombreDeCiudad}? Guía Completa 2025 | Actividades y Tours | Aliworld`,
        description: enhancedDescription,
        keywords: dynamicKeywords.filter((keyword, index, self) => self.indexOf(keyword) === index),
        authors: [{ name: 'Aliworld', url: 'https://www.aliworld.mx' }],
        creator: 'Aliworld - Guía de Viajes',
        publisher: 'Aliworld',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            type: 'website',
            url: `https://www.aliworld.mx/ciudades/${slug}`,
            title: `Guía de ${nombreDeCiudad} 2025 - Qué hacer, Dónde Comer y Tours | Aliworld`,
            siteName: 'Aliworld',
            description: enhancedDescription,
            locale: 'es_MX',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `Guía turística de ${nombreDeCiudad} - Mejores lugares para visitar`,
                    type: 'image/jpeg',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@aliworld_mx',
            creator: '@aliworld_mx',
            title: `¿Qué hacer en ${nombreDeCiudad}? Guía 2025`,
            description: `Descubre las mejores actividades, comida y lugares en ${nombreDeCiudad}. Guía completa + paquetes de viaje.`,
            images: [imageUrl],
        },
        alternates: {
            canonical: `https://www.aliworld.mx/ciudades/${slug}`,
            languages: {
                'es-MX': `https://www.aliworld.mx/ciudades/${slug}`,
                'es': `https://www.aliworld.mx/ciudades/${slug}`,
            },
        },
        category: 'Travel Guide',
        classification: 'Travel Information',
        referrer: 'origin-when-cross-origin',
        generator: 'Next.js',
        applicationName: 'Aliworld',
        other: {
            'travel:destination': nombreDeCiudad,
            'travel:type': 'city-guide',
            'geo:placename': nombreDeCiudad,
        },
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
            name: 'Ciudades',
            href: '/ciudades',
        },
        {
            name: nombreDeCiudad,
            href: `/ciudades/${slug}`,
        },
    ]

    // Structured Data para SEO avanzado
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            // TravelGuide principal
            {
                '@type': 'TravelGuide',
                '@id': `https://www.aliworld.mx/ciudades/${slug}#guide`,
                name: `Guía de ${nombreDeCiudad}`,
                description: `Guía completa de viaje a ${nombreDeCiudad} con actividades, comida típica y consejos útiles.`,
                url: `https://www.aliworld.mx/ciudades/${slug}`,
                image: {
                    '@type': 'ImageObject',
                    url: contentImage,
                    width: '1216',
                    height: '676',
                    caption: `Vista de ${nombreDeCiudad}`
                },
                inLanguage: 'es-MX',
                author: {
                    '@type': 'Organization',
                    name: 'Aliworld',
                    url: 'https://www.aliworld.mx'
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Aliworld',
                    url: 'https://www.aliworld.mx',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://www.aliworld.mx/aliworld-color.svg'
                    }
                },
                about: {
                    '@type': 'Place',
                    '@id': `https://www.aliworld.mx/ciudades/${slug}#place`,
                    name: nombreDeCiudad,
                    description: descripcion,
                    image: contentImage
                },
                mentions: actividades.map(actividad => ({
                    '@type': 'TouristAttraction',
                    name: actividad.fields.titulo,
                    description: actividad.fields.contenido,
                    image: `https:${actividad.fields.imagen?.fields?.file?.url}`
                }))
            },
            // Place schema
            {
                '@type': 'Place',
                '@id': `https://www.aliworld.mx/ciudades/${slug}#place`,
                name: nombreDeCiudad,
                description: descripcion,
                image: [contentImage, headerImage],
                hasMap: `https://www.google.com/maps/search/${encodeURIComponent(nombreDeCiudad)}`,
                touristType: 'Leisure'
            },
            // FAQPage
            {
                '@type': 'FAQPage',
                '@id': `https://www.aliworld.mx/ciudades/${slug}#faq`,
                mainEntity: preguntasFrecuentes.map(faq => ({
                    '@type': 'Question',
                    name: faq.fields.pregunta,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.fields.respuesta
                    }
                }))
            },
            // Organization
            {
                '@type': 'Organization',
                '@id': 'https://www.aliworld.mx#organization',
                name: 'Aliworld',
                url: 'https://www.aliworld.mx',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.aliworld.mx/aliworld-color.svg'
                },
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+52-33-1433-1600',
                    contactType: 'customer service',
                    areaServed: 'MX',
                    availableLanguage: 'Spanish'
                },
                sameAs: [
                    'https://www.facebook.com/aliworld.mx',
                    'https://www.instagram.com/aliworld.mx'
                ]
            },
            // WebPage
            {
                '@type': 'WebPage',
                '@id': `https://www.aliworld.mx/ciudades/${slug}`,
                url: `https://www.aliworld.mx/ciudades/${slug}`,
                name: `¿Qué hacer en ${nombreDeCiudad}? Guía Completa 2025`,
                description: `Guía completa de ${nombreDeCiudad}: ¿Qué hacer, dónde comer y qué visitar? Descubre las mejores actividades, platillos típicos y consejos.`,
                inLanguage: 'es-MX',
                isPartOf: {
                    '@type': 'WebSite',
                    '@id': 'https://www.aliworld.mx',
                    name: 'Aliworld',
                    url: 'https://www.aliworld.mx'
                },
                breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: breadcrumbs.map((crumb, index) => ({
                        '@type': 'ListItem',
                        position: index + 1,
                        name: crumb.name,
                        item: `https://www.aliworld.mx${crumb.href}`
                    }))
                }
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            
            <main id="ciudad-main" tabIndex={-1} className="bg-white">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="relative isolate">
                    <div className="mx-auto max-w-7xl px-6 pb-16 pt-4 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                                {encabezado}
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                {descripcion} <Link href="/ciudades" className="text-sky-600 hover:text-sky-700 underline">Explora más destinos</Link> en nuestra guía completa de viajes.
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
                            <svg role="img" viewBox="0 0 366 729" className="mx-auto w-91.5 max-w-full drop-shadow-2xl">
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
                                    <Image 
                                        alt={`Guía turística de ${nombreDeCiudad} - ${imagenEncabezado.fields.description || 'Lugares imperdibles para visitar'}`} 
                                        src={headerImage} 
                                        width={316} 
                                        height={685} 
                                        priority={true}
                                        className="object-cover w-full h-full"
                                        sizes="(max-width: 768px) 316px, 316px"
                                    />
                                </foreignObject>
                            </svg>
                        </div>
                    </div>
                </div>
                <section className="bg-gray-100 py-24 sm:py-32" aria-labelledby="experiencias-heading" role="region">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <h2 id="experiencias-heading" className="text-base/7 font-semibold text-sky-600">Guía Turística de {nombreDeCiudad}</h2>
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
                                alt={`${nombreDeCiudad} - ${imagenContenido.fields.description || 'Panorama de la ciudad y sus principales atracciones turísticas'}`}
                                src={contentImage}
                                width={1216}
                                height={676}
                                className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1216px"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-white py-24 sm:py-32" aria-labelledby="actividades-heading" role="region">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 id="actividades-heading" className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Las 10 Mejores Cosas que Hacer en {nombreDeCiudad} | Actividades Imperdibles</h2>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                {contenidoActividades}
                            </p>
                        </div>
                        <ul
                            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 list-none lg:mx-0 lg:max-w-none lg:grid-cols-3"
                            aria-label={`Actividades recomendadas en ${nombreDeCiudad}`}
                        >
                            {actividades.map((actividad) => {
                                const activityImage = `https:${actividad.fields.imagen?.fields?.file?.url}`;
                                return (
                                    <li key={actividad.sys.id} className='m-0 list-none group outline-none focus-within:ring-2 focus-within:ring-sky-600 rounded-2xl transition'>
                                        <Image alt={actividad.fields.imagen.fields.description ?? `Actividad en ${nombreDeCiudad}`} src={activityImage} className="aspect-3/2 w-full h-[202px] rounded-2xl object-cover lg:h-[242px] group-hover:opacity-80 group-focus-visible:opacity-80 transition duration-300" width={384} height={242} />
                                        <h3 className="mt-6 text-lg/8 font-semibold text-gray-900 group-hover:underline group-focus-visible:underline">{actividad.fields.titulo}</h3>
                                        <p className="text-base/7 mb-4 text-gray-600">{actividad.fields.contenido}</p>
                                        {actividad.fields.url && (
                                            <Link href={actividad.fields.url} className="cursor-pointer font-semibold text-sky-600 hover:text-sky-700 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                                                Comprar Entradas <ArrowRightIcon className="h-4 w-4 inline-block transition shrink-0 text-sky-600 group-hover:text-sky-700 group-hover:translate-x-1" aria-hidden="true" />
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
                <section className="bg-gray-100 py-24 sm:py-32" aria-labelledby="platillos-heading" role="region">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 id="platillos-heading" className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Gastronomía de {nombreDeCiudad}: Platillos Típicos y Dónde Comer</h2>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                {contenidoPlatillos}
                            </p>
                        </div>
                        <ul
                            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 list-none lg:mx-0 lg:max-w-none lg:grid-cols-3"
                            aria-label={`Platillos típicos de ${nombreDeCiudad}`}
                        >
                            {platillos.map((platillo) => {
                                const foodImage = `https:${platillo.fields.imagen?.fields?.file?.url}`;
                                return (
                                    <li key={platillo.sys.id} className='m-0 list-none group outline-none focus-within:ring-2 focus-within:ring-sky-600 rounded-2xl transition'>
                                        <Image alt={platillo.fields.imagen.fields.description ?? `Platillo típico de ${nombreDeCiudad}`} src={foodImage} className="aspect-3/2 w-full h-[202px] rounded-2xl object-cover lg:h-[242px] group-hover:opacity-80 group-focus-visible:opacity-80 transition duration-300" width={384} height={242} />
                                        <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 group-hover:underline group-focus-visible:underline">{platillo.fields.titulo}</h3>
                                        <p className="text-base/7 text-gray-600">{platillo.fields.descripcion}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
                <section className='bg-white py-24 sm:py-32' aria-labelledby="paquetes-heading" role="region">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-24 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 id="paquetes-heading" className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Paquetes de Viaje a {nombreDeCiudad} | Tours Todo Incluido</h2>
                            <Link href={url} className="hidden text-sm font-semibold group text-sky-600 hover:text-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 sm:block">
                                Ver todos los paquetes
                                <ArrowRightIcon className="h-4 w-4 ml-2 inline-block transition group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 mt-12 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
                            {trips?.map((trip) => (
                                <TripGridItem trip={trip} key={trip.sys.id} />
                            ))}
                        </div>
                        <div className="mt-6 sm:hidden">
                            <Link href={url} className="block text-sm font-semibold group text-sky-600 hover:text-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                                Ver todos los paquetes
                                <ArrowRightIcon className="h-4 w-4 ml-2 inline-block transition group-hover:translate-x-1" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100" aria-labelledby="faq-heading" role="region">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="lg:col-span-5">
                                <h2 id="faq-heading" className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
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
                </section>
                <section className="bg-sky-700" aria-labelledby="cta-heading" role="region">
                    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 id="cta-heading" className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
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
                </section>
                <Socials />
                <Catalog />
                <section className='bg-white py-24 sm:py-32' aria-labelledby="blog-heading" role="region">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-24 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 id="blog-heading" className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Conoce más sobre {nombreDeCiudad}</h2>
                        </div>
                        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3" aria-label={`Artículos de blog sobre ${nombreDeCiudad}`}>
                            {posts?.map((post) => {
                                const {
                                    titulo,
                                    descripcion,
                                    fecha,
                                    portada,
                                    slug,
                                } = post.fields;
                                return (
                                    <li key={slug} className="group outline-none focus-within:ring-2 focus-within:ring-sky-600 rounded-2xl transition">
                                        <Link href={`/blog/${slug}`} className="block h-full" aria-label={`Leer artículo: ${titulo}`}> 
                                            <article className="flex flex-col items-start justify-between h-full">
                                                <div className="relative w-full">
                                                    <Image
                                                        alt={descripcion}
                                                        src={`https:${portada.fields?.file?.url}`}
                                                        width={800}
                                                        height={450}
                                                        className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:opacity-80 group-focus-visible:opacity-80 transition duration-300"
                                                    />
                                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
                                                </div>
                                                <div className="max-w-xl">
                                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                                        <time dateTime={fecha} className="text-gray-500">
                                                            {fecha}
                                                        </time>
                                                    </div>
                                                    <div className="relative">
                                                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:underline group-focus-visible:underline">
                                                            <span className="absolute inset-0" />
                                                            {titulo}
                                                        </h3>
                                                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{descripcion}</p>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

