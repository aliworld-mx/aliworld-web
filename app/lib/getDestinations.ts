import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { contentfulClient } from "../_utils/contentful";
import { TypeDestino } from "../_types/contentful/Destino";

export const getDestinations = unstable_cache(
    async () => {
        try {
            const response = await contentfulClient.getEntries({
                content_type: 'destino',
            });

            if (response.total === 0) {
                throw new Error('No se encontraron destinos');
            }

            return response.items as unknown as TypeDestino[];
        } catch (error) {
            console.error(error);
            return notFound();
        }
    },
    ['destinations'],
    {
        revalidate: 259200, // 3 días
        tags: ['destinations']
    }
);