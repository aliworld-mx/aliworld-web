import Image from "next/image";
import { getBlogPosts } from "../lib/getBlogPosts";
import { Catalog } from "../_components/Catalog";
import Socials from "../_components/Socials";
import { Metadata } from "next";
import { Blog, WithContext } from "schema-dts";
import Link from "next/link";

export const revalidate = 36000;

export const metadata: Metadata = {
    title: 'Blog de Viajes | Aliworld',
    description: 'Explora nuestro blog de viajes y encuentra información sobre destinos únicos, consejos útiles y guías prácticas para planificar tu próxima aventura.',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/blog',
        title: 'Blog de Viajes | Aliworld',
        siteName: 'Aliworld',
        description: 'Explora nuestro blog de viajes y encuentra información sobre destinos únicos, consejos útiles y guías prácticas para planificar tu próxima aventura.',
        locale: 'es_MX',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/blog',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'actividades', 'trenes', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};


export default async function BlogPage() {
    const posts = await getBlogPosts();

    const structuredData: WithContext<Blog> = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.aliworld.mx/blog"
        },
        name: `Blog de Viajes - Aliworld`,
        description: "Explora nuestro blog de viajes y encuentra información sobre destinos únicos, consejos útiles y guías prácticas para planificar tu próxima aventura.",
        "url": "https://www.aliworld.mx/blog",
        author: {
            '@type': 'Organization',
            name: 'Aliworld',
            url: 'https://www.aliworld.mx',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.aliworld.mx/aliworld-color.svg',
            },
        },
        publisher: {
            '@type': 'Organization',
            name: 'Aliworld',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.aliworld.mx/aliworld-color.svg',
            },
        },
        blogPost: posts?.map((post) => {
            const {
                titulo,
                descripcion,
                portada,
                slug,
                etiquetas,
            } = post.fields;

            return {
                '@type': 'BlogPosting',
                headline: titulo,
                description: descripcion,
                image: `https:${portada.fields?.file?.url}`,
                datePublished: post.sys.createdAt,
                dateModified: post.sys.updatedAt,
                author: {
                    '@type': 'Organization',
                    name: 'Aliworld',
                    url: 'https://www.aliworld.mx',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://www.aliworld.mx/aliworld-color.svg',
                    },
                },
                mainEntityOfPage: `https://www.aliworld.mx/blog/${slug}`,
                url: `https://www.aliworld.mx/blog/${slug}`,
                keywords: etiquetas.map((etiqueta) => etiqueta).join(', '),
            };
        }),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="blog-hero-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                                <circle cx="75" cy="75" r="6" fill="currentColor" className="text-primary-600" />
                                <circle cx="37.5" cy="37.5" r="4" fill="currentColor" className="text-secondary-600" />
                                <circle cx="112.5" cy="37.5" r="3.5" fill="currentColor" className="text-accent-600" />
                                <circle cx="37.5" cy="112.5" r="5" fill="currentColor" className="text-purple-600" />
                                <circle cx="112.5" cy="112.5" r="3" fill="currentColor" className="text-primary-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#blog-hero-pattern)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-accent-300 to-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full opacity-20 animate-pulse delay-500"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Blog Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <span className="text-primary-700 font-semibold text-lg">Blog de Viajes</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                            Descubre el mundo a través de <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">nuestras experiencias</span>
                        </h1>
                        
                        <div className="h-1 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto mb-8"></div>
                        
                        <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Encuentra inspiración, consejos de expertos y guías detalladas para planear tu próxima aventura. 
                            Desde destinos exóticos hasta experiencias únicas, te compartimos todo lo que necesitas saber.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                                    {posts?.length || 0}+
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Artículos de Viaje</div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                                    50+
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Destinos Cubiertos</div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                    1K+
                                </div>
                                <div className="text-sm font-medium text-neutral-600">Lectores Mensuales</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-24 sm:py-32 bg-gradient-to-br from-white to-neutral-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {posts && posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {posts.map((post, index) => {
                                const {
                                    titulo,
                                    descripcion,
                                    portada,
                                    slug,
                                    etiquetas,
                                } = post.fields;

                                return (
                                    <Link 
                                        href={`/blog/${slug}`} 
                                        key={slug} 
                                        className="group block"
                                    >
                                        <article className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-primary-200 transform hover:-translate-y-3 focus:outline-none focus:ring-4 focus:ring-primary-500/50">
                                            {/* Article Number Badge */}
                                            <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-sm">{index + 1}</span>
                                            </div>

                                            {/* Category Badge */}
                                            {etiquetas && etiquetas.length > 0 && (
                                                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                                                    <span className="text-xs font-bold text-primary-700">{etiquetas[0]}</span>
                                                </div>
                                            )}

                                            {/* Image Container */}
                                            <div className="relative overflow-hidden">
                                                <Image
                                                    alt={descripcion}
                                                    src={`https:${portada.fields?.file?.url}`}
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
                                                {/* Reading Time and Date */}
                                                <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>{new Date(post.sys.createdAt).toLocaleDateString('es-ES', { 
                                                            day: 'numeric', 
                                                            month: 'short',
                                                            year: 'numeric'
                                                        })}</span>
                                                    </div>
                                                </div>
                                                
                                                <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300">
                                                    {titulo}
                                                </h3>
                                                
                                                <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                                                    {descripcion}
                                                </p>
                                                
                                                {/* Tags */}
                                                {etiquetas && etiquetas.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {etiquetas.slice(0, 3).map((etiqueta) => (
                                                            <span 
                                                                key={etiqueta}
                                                                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-100"
                                                            >
                                                                #{etiqueta}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                
                                                {/* CTA */}
                                                <div className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group/button">
                                                    <span>Leer más</span>
                                                    <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Decorative Elements */}
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full -translate-y-10 translate-x-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                                Próximamente nuevos artículos
                            </h3>
                            <p className="text-neutral-600 max-w-md mx-auto">
                                Estamos preparando contenido increíble sobre destinos y experiencias de viaje. ¡Vuelve pronto!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Socials />
            <Catalog />
        </>
    )
}
