import { unstable_cache } from "next/cache";
import { TypeGuiaDeCiudad } from "../_types/contentful/GuiaDeCiudad";
import { contentfulClient } from "../_utils/contentful";

export const getGuideList = unstable_cache(
    async () => {
        try {
            const entries = await contentfulClient.getEntries({
                content_type: 'guiaDeCiudad',
                limit: 10,
                include: 1,
                select: ['fields.slug', 'fields.nombreDeCiudad', 'fields.descripcion', 'fields.imagenContenido', 'sys.updatedAt'],
            });

            return entries.items as unknown as TypeGuiaDeCiudad[];
        } catch (error) {
            console.error(error);
        }
    },
    ['guide-list'],
    {
        revalidate: 259200, // 3 días
        tags: ['guide-list']
    }
);