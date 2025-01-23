import { contentfulClient } from "../_utils/contentful";

export async function getMetadata(metadataId: string) {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'metadata',
            "sys.id": metadataId,
            include: 3,
        });

        if (response.total === 0) {
            throw new Error('No se encontraron destinos');
        }

        return response.items[0];
    } catch (error) {
        console.error(error);
    }
}