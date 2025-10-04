'use client'

import Image from 'next/image';
import Link from 'next/link';
import { TypeDestino } from '../../_types/contentful/Destino';
import { memo } from 'react';
import { ArrowRightIcon , SparklesIcon } from '@heroicons/react/24/outline';

interface DestinationsListProps {
    destinations: TypeDestino[];
}

const DestinationsList = memo(function DestinationsList({ destinations }: DestinationsListProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations?.map((destination, index) => {
                const { id, nombre, descripcion, imagen } = destination.fields;
                const { url } = imagen.fields.file!;
                const imageUrl = `https:${url}`;
                
                const isPriority = index < 8;
                const isPopular = index < 3; // Marcar los primeros 3 como populares

                return (
                    <article 
                        key={id}
                        className="group relative flex flex-col h-[530px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2"
                    >
                        <Link 
                            href={`paquetes/${id}`} 
                            className="flex flex-col h-full focus:outline-none"
                            aria-label={`Explorar paquetes de viaje a ${nombre}`}
                            prefetch={isPriority}
                        >
                            {/* Image Container - Fixed Height for Portrait */}
                            <div className="relative h-80 overflow-hidden bg-gray-100">
                                {/* Popular Badge */}
                                {isPopular && (
                                    <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-secondary-500 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                                        <SparklesIcon className="w-3 h-3" />
                                        Popular
                                    </div>
                                )}

                                <Image
                                    alt={imagen.fields.description ?? `Destino ${nombre} - Explora paquetes de viaje únicos`}
                                    src={imageUrl}
                                    width={400}
                                    height={500}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    priority={isPriority}
                                    loading={isPriority ? "eager" : "lazy"}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABsRAAEFAQEAAAAAAAAAAAAAAAABAhEhkbHR/9oADAMBAAIRAxEAPwC1xahqFwvvHMwNFOyuZOnScl9XvSBuNmgxFpSL+2X//2Q=="
                                />

                                {/* Subtle overlay for better text contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content Container - Flexible Height */}
                            <div className="flex flex-1 flex-col p-5">
                                {/* Title */}
                                <h2 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors duration-200">
                                    {nombre}
                                </h2>

                                {/* Description */}
                                <p className="text-sm text-neutral-600 line-clamp-3 mb-4 leading-relaxed flex-1">
                                    {descripcion}
                                </p>

                                {/* CTA Footer */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <span className="text-sm font-medium text-primary-600">
                                        Ver paquetes
                                    </span>
                                    <ArrowRightIcon className="w-4 h-4 text-primary-600 transform group-hover:translate-x-1 transition-transform duration-200" />
                                </div>
                            </div>
                        </Link>
                    </article>
                )
            })}
        </div>
    );
});

export default DestinationsList;