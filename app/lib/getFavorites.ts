import { unstable_cache } from "next/cache";
import { TypeFavoritos } from "../_types/contentful/Favoritos";
import { contentfulClient } from "../_utils/contentful";

export const getFavorites = unstable_cache(
    async () => {
        try {
            const response = await contentfulClient.getEntries({
                content_type: 'favoritos',
                "sys.id": '6pToCYkq9PttBHX4ADCcmE',
                include: 2,
            });

            if (response.total === 0) {
                throw new Error('No se encontraron destinos');
            }

            return response.items[0] as unknown as TypeFavoritos;
        } catch (error) {
            console.error(error);
        }
    },
    ['favorites'],
    {
        revalidate: 259200, // 3 días
        tags: ['favorites']
    }
);