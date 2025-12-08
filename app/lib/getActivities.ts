import { unstable_cache } from "next/cache";
import { TypeActividad } from "../_types/contentful/Actividad";
import { contentfulClient } from "../_utils/contentful";

export const getActivities = (etiqueta: string) =>
    unstable_cache(
        async () => {
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
        },
        [`activities-${etiqueta}`],
        {
            revalidate: 259200, // 3 días
            tags: [`activities-${etiqueta}`]
        }
    )();
