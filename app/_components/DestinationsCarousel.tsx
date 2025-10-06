'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { TypeDestino } from "../_types/contentful/Destino";

interface DestinationsCarouselProps {
    destinations: TypeDestino[];
}

export default function DestinationsCarousel({ destinations }: DestinationsCarouselProps) {
    const scrollCarousel = (direction: 'left' | 'right') => {
        const carousel = document.getElementById('destinations-carousel');
        if (carousel) {
            const scrollAmount = direction === 'left' ? -320 : 320;
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section aria-labelledby="category-heading" role="region" className="py-24 sm:py-32 bg-gradient-to-br from-white via-neutral-50 to-primary-50/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.01]">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="destinations-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-primary-600" />
                            <circle cx="15" cy="15" r="1" fill="currentColor" className="text-accent-600" />
                            <circle cx="45" cy="15" r="0.5" fill="currentColor" className="text-secondary-600" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#destinations-pattern)" />
                </svg>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
                    <div className="flex items-center gap-4">
                        {/* Icon Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-accent-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-200">
                            <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <span className="font-semibold text-sm text-primary-700">Destinos</span>
                        </div>

                        <h2 id="category-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
                            Destinos Populares
                        </h2>
                    </div>

                    <Link href="/paquetes" className="hidden text-sm font-semibold group text-primary-600 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition sm:block">
                        Ver todos los destinos
                        <ArrowRightIcon className="h-4 w-4 ml-2 inline-block transition group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Left Navigation Button */}
                    <button
                        onClick={() => scrollCarousel('left')}
                        className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 z-30 p-4 bg-primary-400/95 backdrop-blur-sm rounded-full shadow-2xl border border-white/50 hover:bg-primary-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:opacity-100"
                        aria-label="Anterior destino"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Navigation Button */}
                    <button
                        onClick={() => scrollCarousel('right')}
                        className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 z-30 p-4 bg-primary-400/95 backdrop-blur-sm rounded-full shadow-2xl border border-white/50 hover:bg-primary-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:opacity-100"
                        aria-label="Siguiente destino"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carousel Wrapper */}
                    <div
                        id="destinations-carousel"
                        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide px-2"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {destinations?.map((destination, index) => (
                            <div key={destination.fields.nombre} className="flex-none w-80 snap-center">
                                <Link
                                    href={`/paquetes/${destination.fields.id}`}
                                    className="group relative block h-96 rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-500 transform hover:-translate-y-3 focus-visible:ring-4 focus-visible:ring-primary-400 focus-visible:outline-none"
                                    aria-label={`Ver paquetes para ${destination.fields.nombre}`}
                                >
                                    {/* Popular Badge */}
                                    {index === 0 && (
                                        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-secondary-500 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            ⭐ Popular
                                        </div>
                                    )}

                                    {/* Image */}
                                    <div className="relative h-full">
                                        <Image
                                            width={320}
                                            height={384}
                                            alt={destination?.fields?.imagen?.fields?.description ?? `Imagen de ${destination.fields.nombre}`}
                                            src={`https:${destination?.fields.imagen?.fields?.file?.url}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary-400 group-hover:to-accent-400 transition-all duration-300">
                                                {destination.fields.nombre}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full -translate-y-10 translate-x-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Mobile Link */}
                <div className="mt-8 text-center sm:hidden">
                    <Link href="/paquetes" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
                        Ver todos los destinos
                        <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}