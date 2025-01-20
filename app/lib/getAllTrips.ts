import { TypePaquete } from "../_types/contentful/Paquete";
import { contentfulClient } from "../_utils/contentful";

export async function getAllTrips() {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'paquete',
            limit: 500,
        });

        return response.items as unknown as TypePaquete[];
    } catch (error) {
        console.error(error);
    }
}