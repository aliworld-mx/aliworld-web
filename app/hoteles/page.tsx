import { Metadata } from "next";
import Image from "next/image";
import hotelesImage from "../../public/hoteles.jpg";
import { ExpediaBenefits } from "../_components/Expedia/ExpediaBenefits";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Reserva Hoteles | Aliworld',
    description: 'Reserva tu hotel con beneficios exclusivos. Aliworld cuenta con un amplio catálogo de hoteles alrededor del mundo. Encuentra el mejor precio y beneficios exclusivos en tu próxima reservación. Además, puedes pagar con criptomonedas o tarjetas de crédito y débito. ¡Reserva ahora y disfruta de beneficios exclusivos!',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/hoteles',
        title: 'Reserva Hoteles | Aliworld',
        siteName: 'Aliworld',
        description: 'Reserva tu hotel con beneficios exclusivos. Aliworld cuenta con un amplio catálogo de hoteles alrededor del mundo. Encuentra el mejor precio y beneficios exclusivos en tu próxima reservación. Además, puedes pagar con criptomonedas o tarjetas de crédito y débito. ¡Reserva ahora y disfruta de beneficios exclusivos!',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/hoteles',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};

export default function HotelesPage() {
    return (
        <div className="bg-gradient-to-br from-neutral-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hotels-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary-600" />
                                <circle cx="25" cy="25" r="2" fill="currentColor" className="text-secondary-600" />
                                <circle cx="75" cy="25" r="1.5" fill="currentColor" className="text-accent-600" />
                                <circle cx="25" cy="75" r="2.5" fill="currentColor" className="text-purple-600" />
                                <circle cx="75" cy="75" r="1" fill="currentColor" className="text-primary-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hotels-pattern)" />
                    </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-accent-300 to-purple-300 rounded-full opacity-20 animate-pulse delay-1000"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                        {/* Content */}
                        <div className="py-24 lg:py-32">
                            {/* Service Badge */}
                            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <span className="text-primary-700 font-semibold text-lg">Reserva de Hoteles</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 mb-8 leading-tight">
                                Reserva tu hotel al <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">mejor precio</span>
                            </h1>
                            
                            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mb-8"></div>
                            
                            <p className="text-xl text-neutral-600 leading-relaxed mb-12">
                                Aliworld cuenta con un amplio catálogo de hoteles alrededor del mundo. 
                                Encuentra el mejor precio y beneficios exclusivos en tu próxima reservación. 
                                ¡Reserva ahora y disfruta de una experiencia inolvidable!
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-neutral-700">Mejor precio garantizado</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-neutral-700">Reserva instantánea</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-neutral-700">Soporte 24/7</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-neutral-700">Beneficios exclusivos</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link 
                                href="https://wa.me/+523314331600?text=Hola,%20quiero%20cotizar%20hoteles" 
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/50"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>Cotizar por WhatsApp</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="relative lg:h-full">
                            <div className="h-64 lg:h-full bg-white/20 backdrop-blur-sm overflow-hidden border border-white/50 shadow-2xl">
                                <Image
                                    alt="Hotel de lujo con vista panorámica"
                                src={hotelesImage}
                                    width={950}
                                    height={1500}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ExpediaBenefits />
        </div>
    )
}
