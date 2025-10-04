import Image from "next/image";
import { Catalog } from "../_components/Catalog";
import Socials from "../_components/Socials";
import { Metadata } from "next";
import Link from "next/link";
import { getGuideList } from "../lib/getGuideList";

export const metadata: Metadata = {
    title: 'Guías de Ciudades | Aliworld',
    description: 'Descubre las mejores guías de ciudades para tus viajes. Encuentra información útil y consejos prácticos para explorar cada destino.',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/ciudades',
        title: 'Guías de Ciudades | Aliworld',
        siteName: 'Aliworld',
        description: 'Descubre las mejores guías de ciudades para tus viajes. Encuentra información útil y consejos prácticos para explorar cada destino.',
        locale: 'es_MX',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/blog',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'actividades', 'trenes', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};


export default async function CitiesPage() {
    const guides = await getGuideList();

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="cities-hero-pattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
                                <circle cx="70" cy="70" r="5" fill="currentColor" className="text-primary-600" />
                                <circle cx="35" cy="35" r="3.5" fill="currentColor" className="text-secondary-600" />
                                <circle cx="105" cy="35" r="3" fill="currentColor" className="text-accent-600" />
                                <circle cx="35" cy="105" r="4.5" fill="currentColor" className="text-purple-600" />
                                <circle cx="105" cy="105" r="2.5" fill="currentColor" className="text-primary-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#cities-hero-pattern)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-44 h-44 bg-gradient-to-br from-accent-300 to-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-20 animate-pulse delay-500"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Cities Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span className="text-primary-700 font-semibold text-lg">Guías de Ciudades</span>
                        </div>

                        <h1 
                            id="ciudades-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight"
                        >
                            Explora las <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">ciudades más fascinantes</span> del mundo
                        </h1>
                        
                        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
                        
                        <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Descubre guías completas y detalladas para planear tu próxima aventura urbana. 
                            Desde destinos icónicos hasta gemas ocultas, tenemos toda la información que necesitas.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                                    {guides?.length || 0}+
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Ciudades Cubiertas</div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                                    100+
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Atracciones Incluidas</div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    24/7
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Información Actualizada</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <main id="ciudades-main" tabIndex={-1} className="py-24 sm:py-32 bg-gradient-to-br from-white to-neutral-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {guides && guides.length > 0 ? (
                        <ul
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                            aria-label="Listado de guías de ciudades"
                        >
                            {guides.map((guide, index) => {
                                const {
                                    nombreDeCiudad,
                                    descripcion,
                                    imagenContenido,
                                    slug,
                                } = guide.fields;

                                return (
                                    <li key={slug} className="group">
                                        <Link
                                            href={`/ciudades/${slug}`}
                                            className="block"
                                            aria-label={`Ver guía completa de ${nombreDeCiudad}`}
                                        >
                                            <article 
                                                className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-primary-200 transform hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
                                                aria-labelledby={`ciudad-title-${slug}`}
                                            >
                                                {/* City Number Badge */}
                                                <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center shadow-lg">
                                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                                </div>

                                                {/* City Type Badge */}
                                                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                                                    <span className="text-xs font-bold text-primary-700">Guía Completa</span>
                                                </div>

                                                {/* Image Container */}
                                                <div className="relative overflow-hidden">
                                                    <Image
                                                        alt={`Vista panorámica de ${nombreDeCiudad}. ${descripcion}`}
                                                        src={`https:${imagenContenido.fields?.file?.url}`}
                                                        width={800}
                                                        height={400}
                                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                                        loading="lazy"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                    
                                                </div>

                                                {/* Content */}
                                                <div className="p-6">
                                                    <h2 
                                                        id={`ciudad-title-${slug}`}
                                                        className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300"
                                                    >
                                                        {nombreDeCiudad}
                                                    </h2>
                                                    
                                                    <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                                                        {descripcion}
                                                    </p>
                                                    
                                                    {/* Features */}
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-100">
                                                            🏛️ Atracciones
                                                        </span>
                                                        <span className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-xs font-medium border border-secondary-100">
                                                            🍽️ Gastronomía
                                                        </span>
                                                        <span className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium border border-accent-100">
                                                            🏨 Hoteles
                                                        </span>
                                                    </div>
                                                    
                                                    {/* CTA */}
                                                    <div className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/button">
                                                        <span>Ver guía completa</span>
                                                        <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                {/* Decorative Elements */}
                                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full -translate-y-10 translate-x-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                                            </article>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                                Próximamente nuevas guías
                            </h3>
                            <p className="text-neutral-600 max-w-md mx-auto">
                                Estamos preparando guías completas de las ciudades más fascinantes del mundo. ¡Vuelve pronto!
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Socials />
            <Catalog />
        </>
    )
}
