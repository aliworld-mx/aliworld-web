'use client'

import { useFavorites } from '../_hooks/useFavorites'
import { TripGridItem } from './TripGridItem'
import { HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const FavoritesGrid = () => {
  const { favorites, isLoaded, clearFavorites, favoritesCount } = useFavorites()

  if (!isLoaded) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-xl h-96"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (favoritesCount === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <HeartIcon className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            No tienes favoritos aún
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Comienza a explorar nuestros paquetes de viaje y guarda tus favoritos para encontrarlos fácilmente más tarde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/paquetes"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              Explorar Paquetes
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Ir al Inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Mis Favoritos
          </h1>
          <p className="text-gray-600 mt-2">
            {favoritesCount} paquete{favoritesCount !== 1 ? 's' : ''} guardado{favoritesCount !== 1 ? 's' : ''}
          </p>
        </div>
        
        {favoritesCount > 0 && (
          <button
            onClick={clearFavorites}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Limpiar Favoritos
          </button>
        )}
      </div>

      {/* Favorites Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((favorite) => {
          const tripData = {
            fields: {
              id: favorite.id,
              slug: favorite.slug,
              nombre: favorite.nombre,
              imagen: {
                fields: {
                  file: {
                    url: favorite.imagen.replace('https:', '')
                  },
                  description: `Imagen del paquete ${favorite.nombre}`
                }
              },
              precio: favorite.precio,
              moneda: favorite.moneda,
              destino: {
                fields: {
                  id: favorite.destino
                }
              },
              // Valores por defecto para campos requeridos
              paises: [],
              ciudades: [],
              dias: 7,
              noches: 6
            },
            sys: {
              updatedAt: favorite.addedAt
            }
          }

          return (
            <div key={favorite.id} className="relative">
              {/* Badge de fecha agregada */}
              <div className="absolute top-2 left-2 z-10 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                Agregado {new Date(favorite.addedAt).toLocaleDateString('es-ES', { 
                  day: 'numeric', 
                  month: 'short' 
                })}
              </div>
              <TripGridItem trip={tripData as any} priority={false} />
            </div>
          )
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          ¿Listo para tu próxima aventura?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contacta a nuestros expertos para obtener más información sobre tus paquetes favoritos y comenzar a planificar tu viaje perfecto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.open('https://wa.me/523314331600?text=Hola, quiero información sobre mis paquetes favoritos', '_blank')}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
            </svg>
            Contactar por WhatsApp
          </button>
          <Link
            href="/paquetes"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            Explorar Más Paquetes
          </Link>
        </div>
      </div>
    </div>
  )
}