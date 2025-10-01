'use client'

import React from 'react'

interface MarqueeProps {
  /** Array de textos que se mostrarán en el marquee */
  texts: string[]
  /** Color de fondo del marquee */
  backgroundColor?: string
  /** Color del texto */
  textColor?: string
  /** Velocidad de la animación en segundos (por defecto 30s) */
  speed?: number
  /** Altura del banner */
  height?: string
  /** Tamaño de fuente */
  fontSize?: string
  /** Peso de la fuente */
  fontWeight?: string
  /** Separador entre textos */
  separator?: string
  /** Pausar animación al hover */
  pauseOnHover?: boolean
}

export const Marquee: React.FC<MarqueeProps> = ({
  texts,
  backgroundColor = 'bg-primary-600',
  textColor = 'text-white',
  speed = 30,
  height = 'h-16',
  fontSize = 'text-lg',
  fontWeight = 'font-semibold',
  separator = '•',
  pauseOnHover = true
}) => {
  // Crear el texto completo con separadores
  const fullText = texts.join(` ${separator} `)

  return (
    <div 
      className={`
        ${backgroundColor} 
        ${height} 
        overflow-hidden 
        relative 
        flex 
        items-center
        border-y 
        border-black/10
      `}
    >
      <div 
        className={`
          flex 
          items-center 
          whitespace-nowrap 
          animate-marquee
          ${pauseOnHover ? 'hover:pause' : ''}
        `}
        style={{
          animationDuration: `${speed}s`
        }}
      >
        {/* Repetir el texto múltiples veces para loop seamless */}
        {Array.from({ length: 4 }, (_, index) => (
          <span 
            key={index}
            className={`
              ${textColor} 
              ${fontSize} 
              ${fontWeight}
              tracking-wide
              px-4
              inline-block
            `}
          >
            {fullText} {separator}
          </span>
        ))}
      </div>
      
      {/* Gradientes para suavizar los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-current to-transparent opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-current to-transparent opacity-20 pointer-events-none" />
    </div>
  )
}