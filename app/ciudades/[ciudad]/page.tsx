import Image from 'next/image'
import { Breadcrumbs } from '@/app/_components/Breadcrumbs'
import { LockClosedIcon, MapPinIcon, StarIcon, HeartIcon } from '@heroicons/react/20/solid'
import Socials from '@/app/_components/Socials'
import { getGuide } from '@/app/lib/getGuide'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTripsByCity } from '@/app/lib/getTripsByCity'
import { Catalog } from '@/app/_components/Catalog'
import { getBlogPostsByCity } from '@/app/lib/getBlogPostsByCity'
import { TripGridItem } from '@/app/_components/TripGridItem'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid'

export const revalidate = 2629746; // 1 mes en segundos

interface PageProps {
    params: Promise<{ ciudad: string }>;
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { ciudad } = await params;
    const guia = await getGuide(ciudad);
    const { nombreDeCiudad, imagenContenido, slug, actividades, platillos } = guia.fields;
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

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
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
                mentions: actividades.map(actividad => ({
                    '@type': 'TouristAttraction',
                    name: actividad.fields.titulo,
                    description: actividad.fields.contenido,
                    image: `https:${actividad.fields.imagen?.fields?.file?.url}`
                }))
            },
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
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

            <main id="ciudad-main" tabIndex={-1} className="bg-white">
                {/* Hero Section Moderno */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 min-h-screen flex items-center">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="city-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                    <circle cx="40" cy="40" r="3" fill="currentColor" className="text-primary-600" />
                                    <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="60" cy="20" r="2" fill="currentColor" className="text-accent-600" />
                                    <circle cx="20" cy="60" r="1" fill="currentColor" className="text-primary-500" />
                                    <circle cx="60" cy="60" r="2.5" fill="currentColor" className="text-secondary-500" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#city-pattern)" />
                        </svg>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-10 animate-pulse delay-500"></div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content Column */}
                            <header className="text-center lg:text-left">
                                {/* City Badge */}
                                <Breadcrumbs breadcrumbs={breadcrumbs} />
                                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                        <MapPinIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-primary-600 font-semibold text-lg">Guía de {nombreDeCiudad}</span>
                                </div>

                                {/* Main Title */}
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 mb-8 leading-[0.9]">
                                    <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                                        {encabezado}
                                    </span>
                                </h1>

                                {/* Decorative Line */}
                                <div className="h-1 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto lg:mx-0 mb-8"></div>

                                {/* Description */}
                                <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    {descripcion}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Link
                                        href={url}
                                        className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        <span>Explorar Paquetes de Viaje</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    <Link
                                        href="/ciudades"
                                        className="group inline-flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-white text-neutral-700 hover:text-primary-600 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Más Destinos</span>
                                    </Link>
                                </div>
                            </header>

                            {/* Image Column */}
                            <div className="relative">
                                {/* Decorative Elements */}
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full opacity-50 blur-xl"></div>
                                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full opacity-50 blur-xl"></div>

                                {/* Main Image Container */}
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-3 shadow-2xl border border-white/50">
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <Image
                                            alt={`Guía turística de ${nombreDeCiudad} - ${imagenEncabezado.fields.description || 'Lugares imperdibles para visitar'}`}
                                            src={headerImage}
                                            width={600}
                                            height={400}
                                            priority={true}
                                            className="object-cover w-full h-[400px] lg:h-[500px]"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                        {/* Image Overlay Badge */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                        <span className="text-sm font-medium text-neutral-700">Destino Recomendado</span>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xs text-neutral-600">Guía Completa</p>
                                                        <p className="text-sm font-bold text-primary-600">2025</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Experience Section con diseño mejorado */}
                <section className="relative py-24 sm:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden" aria-labelledby="experiencias-heading" role="region">
                    {/* Background Elements */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="experience-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                    <circle cx="50" cy="50" r="4" fill="currentColor" className="text-primary-600" />
                                    <circle cx="25" cy="25" r="2" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="75" cy="25" r="3" fill="currentColor" className="text-accent-600" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#experience-pattern)" />
                        </svg>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Header mejorado */}
                        <header className="mx-auto max-w-4xl text-center mb-20">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                                    <HeartIcon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-accent-600 font-semibold text-lg">Guía Turística de {nombreDeCiudad}</span>
                            </div>

                            <h2 id="experiencias-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                <span className="bg-gradient-to-r from-accent-600 via-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    {subEncabezado}
                                </span>
                            </h2>

                            <div className="h-1 w-24 bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>

                            <p className="text-xl text-neutral-600 leading-relaxed">
                                {contenido}
                            </p>
                        </header>

                        {/* Enhanced Image Section */}
                        <div className="relative mb-20">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-30 blur-2xl"></div>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full opacity-30 blur-2xl"></div>

                            <div className="relative mx-auto max-w-5xl">
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/50">
                                    <div className="relative rounded-2xl overflow-hidden">
                                        <Image
                                            alt={`${nombreDeCiudad} - ${imagenContenido.fields.description || 'Panorama de la ciudad y sus principales atracciones turísticas'}`}
                                            src={contentImage}
                                            width={1216}
                                            height={676}
                                            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1216px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Activities Section Rediseñada */}
                <section className="relative py-24 sm:py-32 bg-white overflow-hidden" aria-labelledby="actividades-heading" role="region">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Header Section */}
                        <header className="mx-auto max-w-4xl text-center mb-20">
                            {/* Activity Badge */}
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full px-6 py-3 shadow-lg border border-primary-200/50 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                                    <MapPinIcon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-primary-700 font-semibold text-lg">Actividades Imperdibles</span>
                            </div>

                            <h2 id="actividades-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                Las <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Mejores Experiencias</span> en {nombreDeCiudad}
                            </h2>

                            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>

                            <p className="text-xl text-neutral-600 leading-relaxed">
                                {contenidoActividades}
                            </p>
                        </header>

                        {/* Enhanced Activities Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label={`Actividades recomendadas en ${nombreDeCiudad}`}>
                            {actividades.map((actividad, index) => {
                                const activityImage = `https:${actividad.fields.imagen?.fields?.file?.url}`;
                                return (
                                    <article key={actividad.sys.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-primary-200 transform hover:-translate-y-2">
                                        {/* Activity Number Badge */}
                                        <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>

                                        {/* Image Container */}
                                        <div className="relative overflow-hidden">
                                            <Image
                                                alt={`${actividad.fields.titulo} - ${actividad.fields.imagen.fields.description ?? `Actividad en ${nombreDeCiudad}`}`}
                                                src={activityImage}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                                width={400}
                                                height={256}
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                                {actividad.fields.titulo}
                                            </h3>
                                            <p className="text-neutral-600 mb-6 leading-relaxed line-clamp-3">
                                                {actividad.fields.contenido}
                                            </p>

                                            {actividad.fields.url && (
                                                <Link
                                                    href={actividad.fields.url}
                                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/button"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                                    </svg>
                                                    <span>Reservar Ahora</span>
                                                    <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            )}
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>
                {/* Gastronomy Section Rediseñada */}
                <section className="relative py-24 sm:py-32 bg-gradient-to-br from-secondary-50 to-accent-50 overflow-hidden" aria-labelledby="platillos-heading" role="region">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="food-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                                    <circle cx="60" cy="60" r="5" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="30" cy="30" r="3" fill="currentColor" className="text-accent-600" />
                                    <circle cx="90" cy="30" r="2" fill="currentColor" className="text-primary-600" />
                                    <circle cx="30" cy="90" r="4" fill="currentColor" className="text-secondary-500" />
                                    <circle cx="90" cy="90" r="2.5" fill="currentColor" className="text-accent-500" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#food-pattern)" />
                        </svg>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Header Section */}
                        <header className="mx-auto max-w-4xl text-center mb-20">
                            {/* Food Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                    <StarIcon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-secondary-700 font-semibold text-lg">Sabores Auténticos</span>
                            </div>

                            <h2 id="platillos-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                <span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">Gastronomía</span> de {nombreDeCiudad}
                            </h2>

                            <div className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full mx-auto mb-8"></div>

                            <p className="text-xl text-neutral-600 leading-relaxed">
                                {contenidoPlatillos}
                            </p>
                        </header>

                        {/* Enhanced Food Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label={`Platillos típicos de ${nombreDeCiudad}`}>
                            {platillos.map((platillo, index) => {
                                const foodImage = `https:${platillo.fields.imagen?.fields?.file?.url}`;
                                return (
                                    <article key={platillo.sys.id} className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-secondary-200 transform hover:-translate-y-2">
                                        {/* Dish Number Badge */}
                                        <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-gradient-to-br from-secondary-600 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>

                                        {/* Image Container */}
                                        <div className="relative overflow-hidden">
                                            <Image
                                                alt={`${platillo.fields.titulo} - ${platillo.fields.imagen.fields.description ?? `Platillo típico de ${nombreDeCiudad}`}`}
                                                src={foodImage}
                                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                                width={400}
                                                height={256}
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-secondary-600 transition-colors duration-300">
                                                {platillo.fields.titulo}
                                            </h3>
                                            <p className="text-neutral-600 mb-6 leading-relaxed">
                                                {platillo.fields.descripcion}
                                            </p>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-200 to-accent-300 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>
                {/* Packages Section Rediseñada */}
                <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden" aria-labelledby="paquetes-heading" role="region">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="packages-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                                    <circle cx="75" cy="75" r="6" fill="currentColor" className="text-primary-600" />
                                    <circle cx="37" cy="37" r="4" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="113" cy="37" r="3" fill="currentColor" className="text-accent-600" />
                                    <circle cx="37" cy="113" r="5" fill="currentColor" className="text-primary-500" />
                                    <circle cx="113" cy="113" r="3.5" fill="currentColor" className="text-secondary-500" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#packages-pattern)" />
                        </svg>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Header Section */}
                        <header className="mx-auto max-w-4xl text-center mb-20">
                            {/* Packages Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </div>
                                <span className="text-primary-700 font-semibold text-lg">Paquetes de Viaje</span>
                            </div>

                            <h2 id="paquetes-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Tours Todo Incluido</span> a {nombreDeCiudad}
                            </h2>

                            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>

                            <p className="text-xl text-neutral-600 leading-relaxed mb-10">
                                Descubre {nombreDeCiudad} con nuestros paquetes completos que incluyen vuelo, hotel, tours y asistencia 24/7.
                            </p>

                            {/* CTA Link mejorado */}
                            <Link
                                href={url}
                                className="group inline-flex items-center gap-3 bg-gradient-to-r from-secondary-600 to-accent-600 hover:from-secondary-700 hover:to-accent-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <span>Ver Todos los Paquetes</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </header>

                        {/* Enhanced Packages Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {trips?.map((trip) => (
                                <div key={trip.sys.id} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-primary-200 transform hover:-translate-y-2">
                                    <TripGridItem trip={trip} />

                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="text-center">
                            <Link
                                href={url}
                                className="md:hidden group inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-white text-primary-600 hover:text-primary-700 font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300"
                            >
                                <span>Ver Todos los Paquetes</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* FAQs Section Rediseñada */}
                <section className="relative py-24 sm:py-32 bg-white overflow-hidden" aria-labelledby="faq-heading" role="region">
                    {/* Background Elements */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="faq-pattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
                                    <circle cx="90" cy="90" r="7" fill="currentColor" className="text-accent-600" />
                                    <circle cx="45" cy="45" r="5" fill="currentColor" className="text-primary-600" />
                                    <circle cx="135" cy="45" r="4" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="45" cy="135" r="6" fill="currentColor" className="text-accent-500" />
                                    <circle cx="135" cy="135" r="4.5" fill="currentColor" className="text-primary-500" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#faq-pattern)" />
                        </svg>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            {/* Left Column - Header */}
                            <div className="lg:col-span-5">
                                {/* FAQ Badge */}
                                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-50 to-primary-50 rounded-full px-6 py-3 shadow-lg border border-accent-200/50 mb-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-accent-700 font-semibold text-lg">Preguntas Frecuentes</span>
                                </div>

                                <h2 id="faq-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                    Todo lo que necesitas saber sobre <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent">{nombreDeCiudad}</span>
                                </h2>

                                <div className="h-1 w-24 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mb-8"></div>

                                <p className="text-xl text-neutral-600 leading-relaxed mb-10">
                                    Resolvemos las dudas más comunes sobre tu viaje a {nombreDeCiudad} para que tengas la mejor experiencia.
                                </p>

                                {/* Trust Elements */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-neutral-700 font-medium">Información actualizada 2025</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-neutral-700 font-medium">Asistencia 24/7 disponible</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-neutral-700 font-medium">Expertos locales certificados</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - FAQs */}
                            <div className="lg:col-span-7">
                                <div className="space-y-6">
                                    {preguntasFrecuentes.map((faq, index) => (
                                        <div key={faq.sys.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/50 hover:border-accent-200 transition-all duration-300">
                                            {/* Question */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-accent-600 transition-colors duration-300">
                                                    {faq.fields.pregunta}
                                                </h3>
                                            </div>

                                            {/* Answer */}
                                            <div className="ml-12">
                                                <p className="text-neutral-600 leading-relaxed">
                                                    {faq.fields.respuesta}
                                                </p>
                                            </div>

                                            {/* Decorative Element */}
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full -translate-y-8 translate-x-8 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Enhanced CTA Section */}
                <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-800 overflow-hidden" aria-labelledby="cta-heading" role="region">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="cta-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                                    <circle cx="100" cy="100" r="8" fill="currentColor" className="text-white" />
                                    <circle cx="50" cy="50" r="6" fill="currentColor" className="text-secondary-300" />
                                    <circle cx="150" cy="50" r="5" fill="currentColor" className="text-accent-300" />
                                    <circle cx="50" cy="150" r="7" fill="currentColor" className="text-white" />
                                    <circle cx="150" cy="150" r="5.5" fill="currentColor" className="text-secondary-300" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
                        </svg>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-br from-white to-secondary-300 rounded-full opacity-20 animate-pulse delay-500"></div>

                    <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
                        {/* CTA Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/30 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <span className="text-white font-semibold text-lg">¡Tu Aventura Te Espera!</span>
                        </div>

                        {/* Main CTA */}
                        <h2 id="cta-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
                            ¿Listo para <span className="bg-gradient-to-r from-secondary-300 to-accent-300 bg-clip-text text-transparent">explorar</span> {nombreDeCiudad}?
                        </h2>

                        <div className="h-1 w-24 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full mx-auto mb-8"></div>

                        <p className="text-xl text-primary-100 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Reserva tu paquete de viaje completo que incluye vuelo, hotel y tours guíados. ¡No te pierdas la oportunidad de vivir una experiencia única en {nombreDeCiudad}!
                        </p>

                        {/* Enhanced CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href={url}
                                className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary-50 text-primary-700 hover:text-primary-800 font-bold py-5 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span>Ver Paquetes a {nombreDeCiudad}</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="https://wa.me/+523314331600"
                                className="group inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300"
                            >
                                <ChatBubbleBottomCenterIcon className="w-5 h-5 text-white" />
                                <span>Cotizar Ahora</span>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold mb-2">Mejor Precio</h3>
                                <p className="text-primary-200 text-sm">Garantizado</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-bold mb-2">Asistencia 24/7</h3>
                                <p className="text-primary-200 text-sm">Siempre disponible</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <LockClosedIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Pago Seguro</h3>
                                <p className="text-primary-200 text-sm">100% protegido</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Socials />
                <Catalog />
                {/* Enhanced Blog Section */}
                <section className="relative py-24 sm:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden" aria-labelledby="blog-heading" role="region">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="blog-pattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                                    <circle cx="80" cy="80" r="6" fill="currentColor" className="text-primary-600" />
                                    <circle cx="40" cy="40" r="4" fill="currentColor" className="text-secondary-600" />
                                    <circle cx="120" cy="40" r="5" fill="currentColor" className="text-accent-600" />
                                    <circle cx="40" cy="120" r="5.5" fill="currentColor" className="text-primary-500" />
                                    <circle cx="120" cy="120" r="4.5" fill="currentColor" className="text-secondary-500" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#blog-pattern)" />
                        </svg>
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        {/* Header Section */}
                        <header className="mx-auto max-w-4xl text-center mb-20">
                            {/* Blog Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <span className="text-primary-700 font-semibold text-lg">Artículos y Guías</span>
                            </div>

                            <h2 id="blog-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                Descubre más sobre <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">{nombreDeCiudad}</span>
                            </h2>

                            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-8"></div>

                            <p className="text-xl text-neutral-600 leading-relaxed">
                                Explora artículos detallados, consejos de expertos y guías completas para aprovechar al máximo tu viaje.
                            </p>
                        </header>

                        {/* Enhanced Blog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label={`Artículos de blog sobre ${nombreDeCiudad}`}>
                            {posts?.map((post, index) => {
                                const {
                                    titulo,
                                    descripcion,
                                    portada,
                                    slug,
                                } = post.fields;
                                return (
                                    <article key={slug} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-primary-200 transform hover:-translate-y-2">
                                        {/* Article Number Badge */}
                                        <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>

                                        <Link href={`/blog/${slug}`} className="block h-full" aria-label={`Leer artículo: ${titulo}`}>
                                            {/* Image Container */}
                                            <div className="relative overflow-hidden">
                                                <Image
                                                    alt={`${titulo} - ${descripcion}`}
                                                    src={`https:${portada.fields?.file?.url}`}
                                                    width={400}
                                                    height={225}
                                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                                    loading="lazy"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                                                    {titulo}
                                                </h3>

                                                <p className="text-neutral-600 mb-6 leading-relaxed line-clamp-3">
                                                    {descripcion}
                                                </p>

                                                {/* Read More */}
                                                <div className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/button">
                                                    <span>Leer más</span>
                                                    <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Decorative Elements */}
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full -translate-y-10 translate-x-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                        </Link>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

