import { TypePaquete } from "../_types/contentful/Paquete";
import { contentfulClient } from "../_utils/contentful";

export async function getAllTrips() {
    try {
        const entries = await contentfulClient.getEntries({
            content_type: 'paquete',
            limit: 500,
            include: 1,
            select: ['fields.slug', 'fields.destino', 'sys.updatedAt'],
        });

        return entries.items as unknown as TypePaquete[];
    } catch (error) {
        console.error(error);
    }
}