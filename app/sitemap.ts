import { TypeGuiaDeCiudad } from "./_types/contentful/GuiaDeCiudad";
import { TypePaquete } from "./_types/contentful/Paquete";
import { TypePublicacion } from "./_types/contentful/Publicacion";
import { escapeXML } from "./_utils/escapeSitemap";
import { getAllGuides } from "./lib/getAllGuides";
import { getAllTrips } from "./lib/getAllTrips";
import { getBlogPosts } from "./lib/getBlogPosts";

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
        '/blog'
    ]

    function getUrl(key: string) {
        return `https://www.aliworld.mx${key === '/' ? '' : key}`;
    }

    const trips = await getAllTrips();

    const tripUrls = trips?.map((trip: TypePaquete) => ({
        url: escapeXML(`https://www.aliworld.mx/paquetes/${trip.fields?.destino.fields.id}/${trip.fields.slug}`),
        lastModified: trip.sys.updatedAt,
        priority: 0.60,
    })) as { url: string, lastModified: string, priority: number }[];

    const guides = await getAllGuides();
    const guideUrls = guides?.map((guide: TypeGuiaDeCiudad) => ({
        url: escapeXML(`https://www.aliworld.mx/ciudades/${guide.fields.slug}`),
        lastModified: guide.sys.updatedAt,
        priority: 0.50,
    })) as { url: string, lastModified: string, priority: number }[];

    const posts = await getBlogPosts();

    const postUrl = posts?.map((post: TypePublicacion) => ({
        url: `https://www.aliworld.mx/blog/${post.fields.slug}`,
        lastModified: post.sys.updatedAt,
        priority: 0.40,
    })) as { url: string, lastModified: string, priority: number }[];

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
        ...guideUrls,
        ...postUrl,
    ];
}
