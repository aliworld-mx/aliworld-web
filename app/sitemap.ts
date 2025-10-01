import { MetadataRoute } from 'next'
import { TypeGuiaDeCiudad } from "./_types/contentful/GuiaDeCiudad";
import { TypePaquete } from "./_types/contentful/Paquete";
import { TypePublicacion } from "./_types/contentful/Publicacion";
import { TypeDestino } from "./_types/contentful/Destino";
import { escapeXML } from "./_utils/escapeSitemap";
import { getAllGuides } from "./lib/getAllGuides";
import { getAllTrips } from "./lib/getAllTrips";
import { getBlogPosts } from "./lib/getBlogPosts";
import { getDestinations } from "./lib/getDestinations";
import { contentfulClient } from "./_utils/contentful";

type SitemapEntry = {
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}

async function getActivityTags(): Promise<string[]> {
    try {
        const response = await contentfulClient.getEntries({
            content_type: 'actividad',
            select: ['fields.etiquetas'],
        });

        const allTags = new Set<string>();
        response.items.forEach((item: any) => {
            if (item.fields?.etiquetas) {
                item.fields.etiquetas.forEach((tag: string) => allTags.add(tag));
            }
        });

        return Array.from(allTags);
    } catch (error) {
        console.error('Error fetching activity tags:', error);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.aliworld.mx';
    
    // High priority pages (homepage)
    const homePage: SitemapEntry[] = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0
        }
    ];

    // Main category pages
    const categoryPages: SitemapEntry[] = [
        '/paquetes',
        '/favoritos', 
        '/promociones',
        '/hoteles',
        '/actividades',
        '/vuelos',
        '/blog',
        '/ciudades',
        '/contacto'
    ].map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9
    }));

    // Destination category pages  
    const destinationCategoryPages: SitemapEntry[] = [
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
        '/paquetes/cruceros'
    ].map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
    }));

    // Fetch dynamic content with error handling
    const [trips, guides, posts, destinations, activityTags] = await Promise.allSettled([
        getAllTrips(),
        getAllGuides(), 
        getBlogPosts(),
        getDestinations(),
        getActivityTags()
    ]);

    // Individual trip pages
    const tripUrls: SitemapEntry[] = trips.status === 'fulfilled' && trips.value 
        ? trips.value.map((trip: TypePaquete) => ({
            url: escapeXML(`${baseUrl}/paquetes/${trip.fields?.destino?.fields?.id}/${trip.fields.slug}`),
            lastModified: trip.sys.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
        : [];

    // Individual destination pages  
    const destinationUrls: SitemapEntry[] = destinations.status === 'fulfilled' && destinations.value
        ? destinations.value.map((destination: TypeDestino) => ({
            url: escapeXML(`${baseUrl}/paquetes/${destination.fields.id}`),
            lastModified: destination.sys.updatedAt,
            changeFrequency: 'weekly' as const,
            priority: 0.75,
        }))
        : [];

    // City guide pages
    const guideUrls: SitemapEntry[] = guides.status === 'fulfilled' && guides.value
        ? guides.value.map((guide: TypeGuiaDeCiudad) => ({
            url: escapeXML(`${baseUrl}/ciudades/${guide.fields.slug}`),
            lastModified: guide.sys.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
        : [];

    // Blog post pages
    const postUrls: SitemapEntry[] = posts.status === 'fulfilled' && posts.value
        ? posts.value.map((post: TypePublicacion) => ({
            url: escapeXML(`${baseUrl}/blog/${post.fields.slug}`),
            lastModified: post.sys.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        }))
        : [];

    // Activity tag pages
    const activityUrls: SitemapEntry[] = activityTags.status === 'fulfilled' && activityTags.value
        ? activityTags.value.map((tag: string) => ({
            url: escapeXML(`${baseUrl}/actividades/${tag}`),
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.65,
        }))
        : [];

    return [
        ...homePage,
        ...categoryPages,
        ...destinationCategoryPages,
        ...destinationUrls,
        ...tripUrls,
        ...guideUrls,
        ...postUrls,
        ...activityUrls,
    ];
}
