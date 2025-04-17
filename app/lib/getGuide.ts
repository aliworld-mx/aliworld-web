import { notFound } from "next/navigation";
import { contentfulClient } from "../_utils/contentful";
import { TypeGuiaDeCiudad } from "../_types/contentful/GuiaDeCiudad";

export async function getGuide(id: string) {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'guiaDeCiudad',
            'fields.slug': id,
        });

        if (response.total === 0) {
            throw new Error('No se encontró la guia');
        }

        return response.items[0] as unknown as TypeGuiaDeCiudad;
    } catch (error) {
        console.error(error);
        return notFound();
    }
}