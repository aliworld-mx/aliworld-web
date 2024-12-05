import { TypeFavoritos } from "../_types/contentful/Favoritos";
import { contentfulClient } from "../_utils/contentful";

export async function getFavorites() {
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
}