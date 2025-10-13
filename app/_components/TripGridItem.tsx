'use client';

import Image from "next/image";
import { toMoney } from "../_utils/toMoney";
import Link from "next/link";
import { TypePaquete } from "../_types/contentful/Paquete";
import { ClockIcon, MapPinIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { useFavorites } from "../_hooks/useFavorites";

interface TripGridItemProps {
    trip: TypePaquete;
    priority?: boolean;
};

export const TripGridItem = ({ trip, priority = false }: TripGridItemProps) => {
    const { slug, nombre, paises, precio, dias, ciudades, moneda, destino, noches, urlImagen } = trip.fields;
    const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
    const isFavorited = isLoaded && isFavorite(trip.fields.id);
    
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: nombre,
        description: `Paquete de viaje de ${dias} días y ${noches} noches a ${paises.map(p => p.fields?.nombre).join(', ')}`,
        image: urlImagen,
        url: `https://www.aliworld.mx/paquetes/${destino.fields.id}/${slug}`,
        offers: {
            '@type': 'Offer',
            price: precio,
            priceCurrency: moneda,
            availability: 'https://schema.org/InStock',
            validFrom: new Date().toISOString(),
            validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
        },
        itinerary: {
            '@type': 'Trip',
            name: nombre,
            duration: `P${dias}D`,
            touristType: 'leisure'
        },
    };

    const handleFavoriteToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(trip);
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <article
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:border-sky-400 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-sky-400 focus-within:ring-offset-2"
                itemScope
                itemType="https://schema.org/TouristTrip"
            >
                {/* Favorite Button */}
                <button
                    onClick={handleFavoriteToggle}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                    disabled={!isLoaded}
                >
                    {isFavorited ? (
                        <HeartSolidIcon className="h-5 w-5 text-red-500 transition-colors duration-200" />
                    ) : (
                        <HeartIcon className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
                    )}
                </button>

                <Link 
                    href={`/paquetes/${destino.fields.id}/${slug}`} 
                    className="block focus:outline-none"
                    aria-label={`Ver detalles del paquete ${nombre}`}
                >
                    <div className="relative overflow-hidden">
                        <Image
                            alt={`Paquete de viaje ${nombre} - ${paises.map(p => p.fields?.nombre).join(', ')}`}
                            src={urlImagen}
                            width={400}
                            height={250}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="w-full object-contain bg-gray-200 group-hover:scale-105 transition-transform duration-300"
                            loading={priority ? "eager" : "lazy"}
                            priority={priority}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABsRAAEFAQEAAAAAAAAAAAAAAAABAhEhkbHR/9oADAMBAAIRAxEAPwC1xahqFwvvHMwNFOyuZOnScl9XvSBuNmgxFpSL+2X//2Q="
                            itemProp="image"
                        />
                        
                        {/* Image Overlay with Quick Info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPinIcon className="h-4 w-4" />
                                    <span>{ciudades.slice(0, 2).map(c => c.fields?.nombre).join(', ')}</span>
                                    {ciudades.length > 2 && <span>+{ciudades.length - 2} más</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 space-y-3">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-sky-700 transition-colors duration-200" itemProp="name">
                            {nombre}
                        </h3>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-sm text-gray-600" itemProp="duration">
                            <ClockIcon className="h-4 w-4" />
                            <span>{dias} Días y {noches} Noches</span>
                        </div>

                        {/* Countries & Cities */}
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600 line-clamp-1" title={paises.map((pais) => pais.fields?.nombre).join(", ")}>
                                <span className="font-medium">Países:</span> {paises.map((pais) => pais.fields?.nombre).join(", ")}
                            </p>
                            <p className="text-sm text-gray-600 line-clamp-1" title={ciudades.map((ciudad) => ciudad.fields?.nombre).join(", ")}>
                                <span className="font-medium">Ciudades:</span> {ciudades.map((ciudad) => ciudad.fields?.nombre).join(", ")}
                            </p>
                        </div>

                        {/* Price Section */}
                        <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <meta itemProp="availability" content="https://schema.org/InStock" />
                            <meta itemProp="priceCurrency" content={moneda} />
                            
                            <div className="flex items-end justify-between">
                                <div>   
                                    <span className="text-xl font-bold text-sky-700" itemProp="price" content={precio.toString()}>
                                        Desde {toMoney(precio)} {moneda}
                                    </span>
                                    <p className="text-xs text-gray-500">+ Impuestos</p>
                                </div>
                                
                                <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:from-sky-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-md">
                                    Ver Detalles
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        </>
    )
}