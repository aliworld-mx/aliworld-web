import { notFound } from "next/navigation";
import { contentfulClient } from "../_utils/contentful";
import { TypePublicacion } from "../_types/contentful/Publicacion";

export async function getBlogPost(id: string) {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'publicacion',
            'fields.slug': id,
        });

        if (response.total === 0) {
            throw new Error('No se encontró la publicacion');
        }

        return response.items[0] as unknown as TypePublicacion;
    } catch (error) {
        console.error(error);
        return notFound();
    }
}