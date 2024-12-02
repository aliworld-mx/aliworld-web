import { contentfulClient } from "../_utils/contentful";

export async function getAllTrips() {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'paquete',
        });

        return response.items;
    } catch (error) {
        console.error(error);
    }
}