import { TypePublicacion } from "../_types/contentful/Publicacion";
import { contentfulClient } from "../_utils/contentful";

export async function getBlogPosts() {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'publicacion',
            limit: 500,
            select: ['fields.titulo', 'fields.descripcion', 'fields.portada', 'fields.slug', 'fields.etiquetas', 'sys.updatedAt', 'sys.createdAt'],
        });

        return response.items as unknown as TypePublicacion[];
    } catch (error) {
        console.error(error);
    }
}