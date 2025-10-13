'use client'

import { useState, useEffect } from 'react'
import { TypePaquete } from '../_types/contentful/Paquete'

const FAVORITES_KEY = 'aliworld_favorites'

export interface FavoriteTrip {
  id: string
  slug: string
  nombre: string
  imagen: string
  precio: number
  moneda: string
  destino: string
  addedAt: string
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteTrip[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Cargar favoritos del localStorage al inicializar
  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY)
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites))
      }
    } catch (error) {
      console.error('Error loading favorites from localStorage:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
      } catch (error) {
        console.error('Error saving favorites to localStorage:', error)
      }
    }
  }, [favorites, isLoaded])

  // Verificar si un paquete está en favoritos
  const isFavorite = (tripId: string): boolean => {
    return favorites.some(fav => fav.id === tripId)
  }

  // Agregar un paquete a favoritos
  const addFavorite = (trip: TypePaquete): void => {
    const favoriteTrip: FavoriteTrip = {
      id: trip.fields.id,
      slug: trip.fields.slug,
      nombre: trip.fields.nombre,
      imagen: trip.fields.urlImagen,
      precio: trip.fields.precio,
      moneda: trip.fields.moneda,
      destino: trip.fields.destino.fields.id,
      addedAt: new Date().toISOString()
    }

    setFavorites(prev => [...prev, favoriteTrip])
  }

  // Remover un paquete de favoritos
  const removeFavorite = (tripId: string): void => {
    setFavorites(prev => prev.filter(fav => fav.id !== tripId))
  }

  // Toggle favorito (agregar/remover)
  const toggleFavorite = (trip: TypePaquete): void => {
    const tripId = trip.fields.id
    if (isFavorite(tripId)) {
      removeFavorite(tripId)
    } else {
      addFavorite(trip)
    }
  }

  // Limpiar todos los favoritos
  const clearFavorites = (): void => {
    setFavorites([])
  }

  // Obtener número total de favoritos
  const favoritesCount = favorites.length

  return {
    favorites,
    isLoaded,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearFavorites,
    favoritesCount
  }
}