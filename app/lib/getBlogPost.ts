import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { contentfulClient } from "../_utils/contentful";
import { TypePublicacion } from "../_types/contentful/Publicacion";

export const getBlogPost = (id: string) =>
    unstable_cache(
        async () => {
            try {
                const response = await contentfulClient.getEntries({
                    content_type: 'publicacion',
                    'fields.slug': id,
                });

                if (response.total === 0) {
                    throw new Error('No se encontró la publicacion');
                }

                return response.items[0] as unknown as TypePublicacion;
            } catch (error) {
                console.error(error);
                return notFound();
            }
        },
        [`blog-post-${id}`],
        {
            revalidate: 259200, // 3 días
            tags: [`blog-post-${id}`]
        }
    )();