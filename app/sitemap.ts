import { TypePaquete } from "./_types/contentful/Paquete";
import { getAllTrips } from "./lib/getAllTrips";

export default async function sitemap() {
    const p0Keys = [
        '/',
    ]
    const p1keys = [
        '/destinos',
        '/destinos/asia',
        '/destinos/europa',
        '/destinos/caribe',
        '/destinos/africa',
        '/destinos/mexico',
        '/destinos/sudamerica',
        '/destinos/centroamerica',
        '/destinos/medio-oriente',
        '/destinos/estados-unidos',
        '/destinos/canada',
        '/destinos/pacifico',
        '/destinos/cruceros',
        '/contacto',
    ]

    function getUrl(key: string) {
        return `https://www.aliworld.mx${key === '/' ? '' : key}`;
    }

    const trips = await getAllTrips();

    const tripUrls = trips?.map((trip: TypePaquete) => ({
        url: `https://www.aliworld.mx/experiencias/${trip.fields.id}`,
        lastModified: trip.sys.updatedAt,
        priority: 0.60,
    })) as { url: string, lastModified: string, priority: number }[];

    if (!trips) {
        return [];
    }

    return [
        ...p0Keys.map((key) => ({
            url: getUrl(key),
            lastModified: new Date(),
            priority: 1.00
        })),
        ...p1keys.map((key) => ({
            url: getUrl(key),
            lastModified: new Date(),
            priority: 0.80
        })),
        ...tripUrls,
    ];
}
