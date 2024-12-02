import { notFound } from "next/navigation";
import { contentfulClient } from "../_utils/contentful";

export async function getTrips(destino: string) {
    try {
        const destinationResponse = await contentfulClient.getEntries({
            content_type: 'destino',
            'fields.id': destino,
        });

        if (destinationResponse.total === 0) {
            throw new Error('No se encontró el destino');
        }

        const destinationSysId = destinationResponse.items[0].sys.id;

        const response = await contentfulClient.getEntries({
            content_type: 'paquete',
            'fields.destino.sys.id': destinationSysId,
        });

        return response.items;
    } catch (error) {
        console.error(error);
        return notFound();
    }
}