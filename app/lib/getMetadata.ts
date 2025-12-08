import { unstable_cache } from "next/cache";
import { contentfulClient } from "../_utils/contentful";

export const getMetadata = (metadataId: string) => 
    unstable_cache(
        async () => {
            try {
                const response = await contentfulClient.getEntries({
                    content_type: 'metadata',
                    "sys.id": metadataId,
                    include: 3,
                });

                if (response.total === 0) {
                    throw new Error('No se encontraron destinos');
                }

                return response.items[0];
            } catch (error) {
                console.error(error);
            }
        },
        [`metadata-${metadataId}`],
        {
            revalidate: 259200, // 3 días
            tags: [`metadata-${metadataId}`]
        }
    )();