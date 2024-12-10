import { TypePaquete } from "./_types/contentful/Paquete";
import { getAllTrips } from "./lib/getAllTrips";

export default async function sitemap() {
    const p0Keys = [
        '/',
    ]
    const p1keys = [
        '/paquetes',
        '/paquetes/asia',
        '/paquetes/europa',
        '/paquetes/caribe',
        '/paquetes/africa',
        '/paquetes/mexico',
        '/paquetes/sudamerica',
        '/paquetes/centroamerica',
        '/paquetes/medio-oriente',
        '/paquetes/estados-unidos',
        '/paquetes/canada',
        '/paquetes/pacifico',
        '/paquetes/cruceros',
        '/favoritos',
        '/promociones',
        '/contacto',
        '/hoteles',
        '/actividades',
        '/vuelos',
    ]

    function getUrl(key: string) {
        return `https://www.aliworld.mx${key === '/' ? '' : key}`;
    }

    const trips = await getAllTrips();

    const tripUrls = trips?.map((trip: TypePaquete) => ({
        url: `https://www.aliworld.mx/experiencia/${trip.fields.id}`,
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
