import { TypePromociones } from "../_types/contentful/Promociones";
import { contentfulClient } from "../_utils/contentful";

export async function getPromos() {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'promociones',
            "sys.id": '5kCaPxPMY7eJatzA7882mA',
            include: 2,
        });

        if (response.total === 0) {
            throw new Error('No se encontraron destinos');
        }

        return response.items[0] as unknown as TypePromociones;
    } catch (error) {
        console.error(error);
    }
}