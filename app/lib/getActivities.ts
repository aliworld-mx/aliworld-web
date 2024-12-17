import { TypeActividad } from "../_types/contentful/Actividad";
import { contentfulClient } from "../_utils/contentful";

export async function getActivities(etiqueta: string) {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'actividad',
            [`fields.etiquetas[in]`]: etiqueta,
        });

        return response.items as unknown as TypeActividad[];
    } catch (error) {
        console.error('Error fetching activities:', error);
        return [];
    }
}
