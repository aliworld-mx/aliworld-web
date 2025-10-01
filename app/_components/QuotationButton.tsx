'use client'

import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

interface QuotationButtonProps {
    destination: string
    slug: string
}

export const QuotationButton = ({ destination, slug }: QuotationButtonProps) => {
    const onClick = async (e: any) => {
        e.preventDefault()

        const reservationData = `Hola! Quiero una cotización para el siguiente paquete: https://www.aliworld.mx/paquetes/${destination}/${slug}`;

        window.open(`https://wa.me/523314331600?text=${encodeURIComponent(reservationData)}`, '_blank')
    };

    return (
        <button
            onClick={onClick}
            className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-500/50 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
            aria-label="Solicitar cotización por WhatsApp"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
            
            {/* Icon */}
            <ChatBubbleLeftRightIcon className="w-6 h-6 relative z-10" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-neutral-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                    ¡Cotiza gratis!
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-neutral-900"></div>
                </div>
            </div>
            
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary-400 opacity-30 animate-ping"></div>
        </button>
    )
}
