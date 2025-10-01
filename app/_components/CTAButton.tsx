'use client'

import { ChatBubbleLeftRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface CTAButtonProps {
    destination: string
    slug: string
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
}

export const CTAButton = ({ destination, slug, variant = 'primary', size = 'lg' }: CTAButtonProps) => {
    const onClick = async (e: any) => {
        e.preventDefault()

        const reservationData = `Hola! Quiero una cotización para el siguiente paquete: https://www.aliworld.mx/paquetes/${destination}/${slug}`;

        window.open(`https://wa.me/523314331600?text=${encodeURIComponent(reservationData)}`, '_blank')
    };

    const baseClasses = "group relative inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 transform hover:scale-105"
    
    const variantClasses = {
        primary: "bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl focus:ring-secondary-500/50",
        secondary: "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-500/50"
    }
    
    const sizeClasses = {
        sm: "px-4 py-2 text-sm gap-2",
        md: "px-6 py-3 text-base gap-3", 
        lg: "px-8 py-4 text-lg gap-3"
    }

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} cursor-pointer`}
            aria-label="Solicitar cotización por WhatsApp"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon */}
            <ChatBubbleLeftRightIcon className="w-5 h-5 relative z-10" />
            
            {/* Text */}
            <span className="relative z-10">Cotizar Ahora</span>
            
            {/* Sparkle */}
            <SparklesIcon className="w-4 h-4 relative z-10 group-hover:animate-pulse" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        </button>
    )
}