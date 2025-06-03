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
            <div className="bg-white py-12 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Blog de Viajes
                        </h1>
                        <p className="mt-2 text-lg/8 text-gray-600">Descubre nuevos lugares y actividades para planear en tu siguiente viaje.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts?.map((post) => {
                            const {
                                titulo,
                                descripcion,
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
                                                className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:opacity-75 transition duration-300 ease-in-out"
                                            />
                                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="max-w-xl">
                                            <div className="group relative">
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
                <Socials />
                <Catalog />
            </div>
        </>
    )
}
