import { TypeNavegacion } from "../_types/contentful/Navegacion";
import { contentfulClient } from "../_utils/contentful";

export async function getNavigation() {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'navegacion',
            "sys.id": '6f3AbdxSGqSMltTXARQaF0'
        });

        if (response.total === 0) {
            throw new Error('No se encontraron destinos');
        }

        return response.items[0] as unknown as TypeNavegacion;
    } catch (error) {
        console.error(error);
    }
}