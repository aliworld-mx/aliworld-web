'use client'

import Image from 'next/image';
import Link from 'next/link';
import { TypeDestino } from '../../_types/contentful/Destino';
import { memo } from 'react';

interface DestinationsListProps {
    destinations: TypeDestino[];
}

const DestinationsList = memo(function DestinationsList({ destinations }: DestinationsListProps) {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {destinations?.map((destination, index) => {
                const { id, nombre, descripcion, imagen } = destination.fields;
                const { url } = imagen.fields.file!;
                const imageUrl = `https:${url}`;
                
                const isPriority = index < 8;

                return (
                    <Link 
                        key={id} 
                        href={`paquetes/${id}`} 
                        className="group block rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 bg-white border border-gray-100 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                        aria-label={`Ver paquetes de viaje a ${nombre}`}
                        prefetch={isPriority}
                    >
                        <div className="relative overflow-hidden">
                            <Image
                                alt={imagen.fields.description ?? `Destino ${nombre} - Paquetes de viaje`}
                                src={imageUrl}
                                width={400}
                                height={600}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="aspect-square w-full rounded-t-lg object-cover sm:aspect-2/3 transition-transform duration-300 group-hover:scale-105"
                                priority={isPriority}
                                loading={isPriority ? "eager" : "lazy"}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABsRAAEFAQEAAAAAAAAAAAAAAAABAhEhkbHR/9oADAMBAAIRAxEAPwC1xahqFwvvHMwNFOyuZOnScl9XvSBuNmgxFpSL+2X//2Q=="
                            />
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-sky-700 line-clamp-2 transition-colors duration-200">
                                {nombre}
                            </h2>
                            <p className="text-sm italic text-gray-500 line-clamp-3">
                                {descripcion}
                            </p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
});

export default DestinationsList;