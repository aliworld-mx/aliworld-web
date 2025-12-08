import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { contentfulClient } from "../_utils/contentful";
import { TypePaquete } from "../_types/contentful/Paquete";

export const getTrip = (id: string) =>
    unstable_cache(
        async () => {
            try {
                const response = await contentfulClient.getEntries({
                    content_type: 'paquete',
                    'fields.slug': id,
                });

                if (response.total === 0) {
                    throw new Error('No se encontró el paquete');
                }

                return response.items[0] as unknown as TypePaquete;
            } catch (error) {
                console.error(error);
                return notFound();
            }
        },
        [`trip-${id}`],
        {
            revalidate: 259200, // 3 días
            tags: [`trip-${id}`]
        }
    )();