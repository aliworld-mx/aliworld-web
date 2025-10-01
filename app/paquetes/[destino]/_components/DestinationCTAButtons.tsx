'use client'

import { ChatBubbleLeftEllipsisIcon, EyeIcon } from "@heroicons/react/24/outline";

interface DestinationCTAButtonsProps {
    formattedDestination: string;
    tripsCount: number;
}

export default function DestinationCTAButtons({ formattedDestination, tripsCount }: DestinationCTAButtonsProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
                onClick={() => {
                    document.querySelector('[aria-label*="Paquetes de viaje disponibles"]')?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }}
                className="cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-4 px-8 rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
            >
                <EyeIcon className="w-5 h-5" />
                Explorar Paquetes
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {tripsCount} disponibles
                </span>
            </button>
            
            <button 
                onClick={() => {
                    window.open(`https://wa.me/523314331600?text=Hola, quiero información sobre paquetes de viaje a ${formattedDestination}`, '_blank');
                }}
                className="cursor-pointer inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm text-secondary-700 font-semibold py-4 px-8 rounded-2xl hover:bg-white border-2 border-secondary-200 hover:border-secondary-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary-500/50"
            >
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
                Consultar Experto
            </button>
        </div>
    );
}