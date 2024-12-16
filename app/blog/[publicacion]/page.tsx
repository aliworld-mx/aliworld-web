import { PageProps } from '@/.next/types/app/blog/[publicacion]/page';
import BackButton from '@/app/_components/Buttons/BackButton';
import { Catalog } from '@/app/_components/Catalog';
import Socials from '@/app/_components/Socials';
import { getBlogPost } from '@/app/lib/getBlogPost';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPosting, WithContext } from 'schema-dts';

export const revalidate = 36000;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { publicacion } = await params;
    const post = await getBlogPost(publicacion);
    const {
        titulo,
        portada,
        descripcion,
    } = post.fields;

    return {
        title: titulo,
        description: descripcion,
        openGraph: {
            siteName: 'Aliworld',
            type: 'article',
            title: titulo,
            description: descripcion,
            images: [
                {
                    url: `https:${portada.fields.file?.url}`,
                    width: 1200,
                    height: 600,
                    alt: titulo,
                },
            ],
            url: `https://www.aliworld.mx/blog/${publicacion}`,
        },
        alternates: {
            canonical: `https://www.aliworld.mx/blog/${publicacion}`,
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { publicacion } = await params;
    const post = await getBlogPost(publicacion);
    const {
        titulo,
        contenido,
        portada,
        descripcion,
    } = post.fields;

    const structuredData: WithContext<BlogPosting> = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: `${titulo} - Aliworld`,
        description: descripcion,
        image: `https:${portada.fields.file?.url}`,
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
        datePublished: post.sys.createdAt,
        dateModified: post.sys.updatedAt,
    };

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                const { url, description } = node.data.target.fields.file;
                const imageUrl = `https:${url}`;
                return (
                    <figure>
                        <Image className='py-8 rounded-3xl w-full' src={imageUrl} width={1265} height={712} alt={description} />
                        <figcaption>{description}</figcaption>
                    </figure>
                );
            },
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
                return <p className='mb-4'>{children}</p>;
            },
            [BLOCKS.HEADING_1]: (node: any, children: any) => {
                return <h1 className='text-3xl font-bold mb-4'>{children}</h1>;
            },
            [BLOCKS.HEADING_2]: (node: any, children: any) => {
                return <h2 className='text-2xl font-bold mb-4'>{children}</h2>;
            },
            [BLOCKS.HEADING_3]: (node: any, children: any) => {
                return <h3 className='text-xl font-bold mb-4'>{children}</h3>;
            },
            [BLOCKS.UL_LIST]: (node: any, children: any) => {
                return <ul className='list-disc ml-8 mb-4'>{children}</ul>;
            },
            [INLINES.HYPERLINK]: (node: any) => {
                const { uri } = node.data;
                return (
                    <Link href={uri} className='text-sky-600 underline'>{node.content[0].value}</Link>
                );
            },
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className='bg-white pt-12 pb-24 sm:pb-32'>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton />
                    <div className="flex flex-col lg:flex-row lg:order-first">
                        <article className="flex-1 text-gray-800">
                            {documentToReactComponents(contenido, options)}
                        </article>
                    </div>
                </div>
                <Catalog />
                <Socials />
            </div>
        </>
    );
}
