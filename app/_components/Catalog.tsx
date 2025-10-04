import Link from "next/link"
import actividadesImage from "../../public/catalog/actividades.jpg";
import vuelosImage from "../../public/catalog/vuelos.jpg";
import hotelesImage from "../../public/catalog/hoteles.jpg";
import paquetesImage from "../../public/catalog/paquetes.jpg";
import Image from "next/image";

const features = [
    {
        name: 'Paquetes de Viaje',
        description: 'Tours completos con guía experto, vuelos, hospedaje premium y transporte incluido.',
        href: '/paquetes',
        imageSrc: paquetesImage,
        imageAlt: 'Paquetes de viaje todo incluido a destinos increíbles',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        ),
        badge: 'Todo Incluido',
        color: 'from-primary-500 to-primary-600',
        hoverColor: 'hover:border-primary-200',
    },
    {
        name: 'Hoteles',
        description: 'Reserva en hoteles de lujo con beneficios exclusivos y garantía de mejor precio.',
        href: '/hoteles',
        imageSrc: hotelesImage,
        imageAlt: 'Hoteles de lujo y boutique en los mejores destinos',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        badge: 'Mejor Precio',
        color: 'from-secondary-500 to-secondary-600',
        hoverColor: 'hover:border-secondary-200',
    },
    {
        name: 'Vuelos',
        description: 'Amplia selección de vuelos nacionales e internacionales con las mejores aerolíneas.',
        href: '/vuelos',
        imageSrc: vuelosImage,
        imageAlt: 'Vuelos nacionales e internacionales con las mejores aerolíneas',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        ),
        badge: 'Ofertas',
        color: 'from-accent-500 to-accent-600',
        hoverColor: 'hover:border-accent-200',
    },
    {
        name: 'Actividades',
        description: 'Entradas a parques temáticos, tours exclusivos y experiencias únicas mundiales.',
        href: '/actividades',
        imageSrc: actividadesImage,
        imageAlt: 'Actividades y experiencias únicas en destinos alrededor del mundo',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
        ),
        badge: 'Experiencias',
        color: 'from-purple-500 to-purple-600',
        hoverColor: 'hover:border-purple-200',
    },
]

export const Catalog = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden" aria-labelledby="catalog-heading">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="catalog-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <circle cx="100" cy="100" r="8" fill="currentColor" className="text-primary-600" />
                            <circle cx="50" cy="50" r="6" fill="currentColor" className="text-secondary-600" />
                            <circle cx="150" cy="50" r="5" fill="currentColor" className="text-accent-600" />
                            <circle cx="50" cy="150" r="7" fill="currentColor" className="text-purple-600" />
                            <circle cx="150" cy="150" r="5.5" fill="currentColor" className="text-primary-500" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#catalog-pattern)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-accent-300 to-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-20 animate-pulse delay-500"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header Section */}
                <header className="mx-auto max-w-4xl text-center mb-20">
                    {/* Catalog Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <span className="text-primary-700 font-semibold text-lg">Nuestros Servicios</span>
                    </div>

                    <h2 id="catalog-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                        Todo lo que necesitas para <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">tu viaje perfecto</span>
                    </h2>
                    
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
                    
                    <p className="text-xl text-neutral-600 leading-relaxed">
                        Desde paquetes completos hasta servicios individuales, tenemos todo cubierto para hacer realidad el viaje de tus sueños.
                    </p>
                </header>

                {/* Enhanced Catalog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Link
                            href={feature.href}
                            key={feature.name}
                            className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 ${feature.hoverColor} transform hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-primary-500/50`}
                            target={feature.href.startsWith('http') ? '_blank' : undefined}
                            rel={feature.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={`Explorar ${feature.name}`}
                        >
                            {/* Service Number Badge */}
                            <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                                <span className="text-xs font-bold text-neutral-700">{feature.badge}</span>
                            </div>

                            {/* Image Container */}
                            <div className="relative overflow-hidden">
                                <Image
                                    alt={feature.imageAlt}
                                    src={feature.imageSrc}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300">
                                        {feature.name}
                                    </h3>
                                </div>
                                
                                <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                                    {feature.description}
                                </p>
                                
                                {/* CTA Button */}
                                <div className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/button">
                                    <span>Explorar ahora</span>
                                    <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full -translate-y-10 translate-x-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-neutral-700">Disponible 24/7</span>
                        </div>
                        <div className="w-px h-6 bg-neutral-200"></div>
                        <span className="text-sm text-neutral-600">Asistencia personalizada para tu viaje</span>
                        <div className="w-px h-6 bg-neutral-200"></div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-primary-700">Mejor precio garantizado</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
