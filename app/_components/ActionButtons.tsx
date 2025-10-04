'use client'

import { HeartIcon as HeartIconOutline, ShareIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import { useFavorites } from '@/app/_hooks/useFavorites'
import { TypePaquete } from '@/app/_types/contentful/Paquete'
import { useState } from 'react'

interface ActionButtonsProps {
    experience: TypePaquete
}

export const ActionButtons = ({ experience }: ActionButtonsProps) => {
    const { isFavorite, toggleFavorite } = useFavorites()
    const [showShareTooltip, setShowShareTooltip] = useState(false)
    const tripId = experience.fields.id
    const isInFavorites = isFavorite(tripId)

    const handleFavoriteClick = () => {
        toggleFavorite(experience)
    }

    const handleShareClick = async () => {
        const shareData = {
            title: `${experience.fields.nombre} - Aliworld`,
            text: `¡Mira este increíble paquete de viaje! ${experience.fields.nombre} a ${experience.fields.destino.fields.nombre}`,
            url: `https://www.aliworld.mx/paquetes/${experience.fields.destino.fields.id}/${experience.fields.slug}`
        }

        try {
            if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
                await navigator.share(shareData)
            } else {
                // Fallback: copiar al clipboard
                await navigator.clipboard.writeText(shareData.url)
                setShowShareTooltip(true)
                setTimeout(() => setShowShareTooltip(false), 2000)
            }
        } catch {
            try {
                await navigator.clipboard.writeText(shareData.url)
                setShowShareTooltip(true)
                setTimeout(() => setShowShareTooltip(false), 2000)
            } catch (clipboardError) {
                console.error('Error al compartir:', clipboardError)
            }
        }
    }

    return (
        <div className="absolute top-4 right-4 z-10 flex gap-2">
            {/* Favorite Button */}
            <button 
                onClick={handleFavoriteClick}
                className={`cursor-pointer group w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:scale-105 ${
                    isInFavorites 
                        ? 'bg-red-500/90 hover:bg-red-600' 
                        : 'bg-white/90 hover:bg-white'
                }`}
                aria-label={isInFavorites ? 'Remover de favoritos' : 'Agregar a favoritos'}
            >
                {isInFavorites ? (
                    <HeartIconSolid className="w-5 h-5 text-white animate-pulse" />
                ) : (
                    <HeartIconOutline className="w-5 h-5 text-neutral-600 group-hover:text-red-500 transition-colors duration-200" />
                )}
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-neutral-900 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap shadow-lg">
                        {isInFavorites ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-neutral-900"></div>
                    </div>
                </div>
            </button>

            {/* Share Button */}
            <button 
                onClick={handleShareClick}
                className="group w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 hover:scale-105 relative"
                aria-label="Compartir paquete"
            >
                <ShareIcon className="w-5 h-5 text-neutral-600 group-hover:text-primary-500 transition-colors duration-200" />
                
                {/* Tooltip normal */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-neutral-900 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap shadow-lg">
                        Compartir
                        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-neutral-900"></div>
                    </div>
                </div>

                {/* Tooltip de confirmación */}
                {showShareTooltip && (
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 z-20">
                        <div className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap shadow-lg animate-pulse">
                            ¡Enlace copiado!
                            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-green-600"></div>
                        </div>
                    </div>
                )}
            </button>
        </div>
    )
}