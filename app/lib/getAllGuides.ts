import { unstable_cache } from "next/cache";
import { TypeGuiaDeCiudad } from "../_types/contentful/GuiaDeCiudad";
import { contentfulClient } from "../_utils/contentful";

export const getAllGuides = unstable_cache(
    async () => {
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
    },
    ['all-guides'],
    {
        revalidate: 259200, // 3 días
        tags: ['all-guides']
    }
);