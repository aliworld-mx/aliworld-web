import { notFound } from "next/navigation";
import { contentfulClient } from "../_utils/contentful";
import { TypePaquete } from "../_types/contentful/Paquete";

export async function getTrip(id: string) {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'paquete',
            'fields.id': id,
        });

        if (response.total === 0) {
            throw new Error('No se encontró el paquete');
        }

        const entry = response.items[0];

        const salidasResponse = await contentfulClient.getEntries({
            content_type: 'salida',
            query: entry.fields.id as string,
        });

        return {
            ...entry,
            fields: {
                ...entry.fields,
                salidas: salidasResponse.items,
            }
        } as unknown as TypePaquete;
    } catch (error) {
        console.error(error);
        return notFound();
    }
}