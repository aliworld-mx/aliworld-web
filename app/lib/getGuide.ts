import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { contentfulClient } from "../_utils/contentful";
import { TypeGuiaDeCiudad } from "../_types/contentful/GuiaDeCiudad";

export const getGuide = (id: string) =>
    unstable_cache(
        async () => {
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
        },
        [`guide-${id}`],
        {
            revalidate: 259200, // 3 días
            tags: [`guide-${id}`]
        }
    )();