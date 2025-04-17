import { TypeGuiaDeCiudad } from "../_types/contentful/GuiaDeCiudad";
import { contentfulClient } from "../_utils/contentful";

export async function getAllGuides() {
    try {
        const entries = await contentfulClient.getEntries({
            content_type: 'guiaDeCiudad',
            limit: 600,
            include: 1,
            select: ['fields.slug', 'sys.updatedAt'],
        });

        return entries.items as unknown as TypeGuiaDeCiudad[];
    } catch (error) {
        console.error(error);
    }
}