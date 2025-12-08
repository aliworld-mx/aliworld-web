import { unstable_cache } from "next/cache";
import { TypePublicacion } from "../_types/contentful/Publicacion";
import { contentfulClient } from "../_utils/contentful";

export const getBlogPostsByCity = (city: string) =>
    unstable_cache(
        async () => {
            try {
                const cityResponse = await contentfulClient.getEntries({
                    content_type: 'ciudad',
                    'fields.identificador': city,
                });

                if (cityResponse.total === 0) {
                    throw new Error('No se encontró la ciudad');
                }

                const citySysId = cityResponse.items[0].sys.id;

                const response = await contentfulClient.getEntries({
                    content_type: 'publicacion',
                     'fields.ciudades.sys.id': citySysId,
                    limit: 6,
                    select: ['fields.titulo', 'fields.descripcion', 'fields.portada', 'fields.slug', 'sys.createdAt'],
                    order: ['-sys.createdAt'],
                });

                return response.items as unknown as TypePublicacion[];
            } catch (error) {
                console.error(error);
            }
        },
        [`blog-posts-by-city-${city}`],
        {
            revalidate: 259200, // 3 días
            tags: [`blog-posts-by-city-${city}`]
        }
    )();