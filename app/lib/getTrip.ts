import { notFound } from "next/navigation";
import { contentfulClient } from "../_utils/contentful";

export async function getTrip(id: string) {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'paquete',
            'fields.id': id,
        });

        if (response.total === 0) {
            throw new Error('No se encontró el paquete');
        }

        return response.items[0];
    } catch (error) {
        console.error(error);
        return notFound();
    }
}