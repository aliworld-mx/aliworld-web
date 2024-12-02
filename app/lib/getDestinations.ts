import { notFound } from "next/navigation";
import { contentfulClient } from "../_utils/contentful";

export async function getDestinations() {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'destino',
        });

        if (response.total === 0) {
            throw new Error('No se encontraron destinos');
        }

        return response.items;
    } catch (error) {
        console.error(error);
        return notFound();
    }
}