import { unstable_cache } from "next/cache";
import { contentfulClient } from "../_utils/contentful";
import { TypePaquete } from "../_types/contentful/Paquete";

export const getTripsByCity = (city: string) =>
    unstable_cache(
        async () => {
            try {
                const cityResponse = await contentfulClient.getEntries({
                    content_type: 'ciudad',
                    'fields.identificador': city,
                });

                if (cityResponse.total === 0) {
                    throw new Error('No se encontró la ciudad');
                }

                const citySysId = cityResponse.items[0].sys.id;

                const response = await contentfulClient.getEntries({
                    content_type: 'paquete',
                    'fields.ciudades.sys.id': citySysId,
                    limit: 3,
                });

                return response.items as unknown as TypePaquete[];
            } catch (error) {
                console.error(error);
            }
        },
        [`trips-by-city-${city}`],
        {
            revalidate: 259200, // 3 días
            tags: [`trips-by-city-${city}`]
        }
    )();