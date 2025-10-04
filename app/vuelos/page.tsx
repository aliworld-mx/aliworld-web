import { Metadata } from "next";
import Image from "next/image";
import vuelosImage from "../../public/vuelos.jpg";
import { ExpediaBenefits } from "../_components/Expedia/ExpediaBenefits";
import Link from "next/link";
import { BoltIcon, CheckBadgeIcon, CurrencyDollarIcon, GlobeAmericasIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
    title: 'Reserva Vuelos | Aliworld',
    description: 'Aliworld cuenta con una amplia variedad de vuelos nacionales e internacionales. Reserva con nosotros y disfruta de beneficios exclusivos. ¡Encuentra la mejor tarifa en vuelos con Aliworld!',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/vuelos',
        title: 'Reserva Vuelos | Aliworld',
        siteName: 'Aliworld',
        description: 'Aliworld cuenta con una amplia variedad de vuelos nacionales e internacionales. Reserva con nosotros y disfruta de beneficios exclusivos. ¡Encuentra la mejor tarifa en vuelos con Aliworld!',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/vuelos',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'vuelos', 'hoteles', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};

export default function VuelosPage() {
    return (
        <div className="bg-gradient-to-br from-neutral-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="flights-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                                <circle cx="60" cy="60" r="4" fill="currentColor" className="text-primary-600" />
                                <circle cx="30" cy="30" r="3" fill="currentColor" className="text-secondary-600" />
                                <circle cx="90" cy="30" r="2.5" fill="currentColor" className="text-accent-600" />
                                <circle cx="30" cy="90" r="3.5" fill="currentColor" className="text-purple-600" />
                                <circle cx="90" cy="90" r="2" fill="currentColor" className="text-primary-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#flights-pattern)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-20 w-36 h-36 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-44 h-44 bg-gradient-to-br from-accent-300 to-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        {/* Image - Mobile first, then desktop left */}
                        <div className="relative lg:h-full order-2 lg:order-1">
                            <div className="h-64 lg:h-full bg-white/20 backdrop-blur-sm overflow-hidden border border-white/50 shadow-2xl">
                                <Image
                                    alt="Vista aérea desde un avión con destinos increíbles"
                                    src={vuelosImage}
                                    width={950}
                                    height={1500}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="py-24 lg:py-32 order-1 lg:order-2">
                            {/* Service Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </div>
                                <span className="text-primary-700 font-semibold text-lg">Reserva de Vuelos</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                Reserva tus vuelos con la <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">mejor tarifa</span>
                            </h1>
                            
                            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mb-8"></div>
                            
                            <p className="text-xl text-neutral-600 leading-relaxed mb-12">
                                Aliworld cuenta con una amplia variedad de vuelos nacionales e internacionales. 
                                Reserva con nosotros y disfruta de beneficios exclusivos. 
                                ¡Encuentra la mejor tarifa en vuelos y vuela hacia tu próxima aventura!
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                                        <CurrencyDollarIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-medium text-neutral-700">Mejores tarifas</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                                        <GlobeAmericasIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-medium text-neutral-700">Destinos globales</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                                        <CheckBadgeIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-medium text-neutral-700">Reserva segura</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <BoltIcon className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-medium text-neutral-700">Confirmación rápida</span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    href="https://wa.me/+523314331600?text=Hola,%20quiero%20cotizar%20vuelos" 
                                    className="inline-flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-white text-primary-700 hover:text-primary-800 font-bold px-8 py-4 rounded-2xl border border-primary-200 hover:border-primary-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>Cotiza ahora</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ExpediaBenefits />
        </div>
    )
}
