import Link from "next/link"

export default function HotelQuotation() {
    return (
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden" aria-labelledby="hotel-quotation-heading">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hotel-quotation-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-white" />
                            <circle cx="25" cy="25" r="2" fill="currentColor" className="text-secondary-200" />
                            <circle cx="75" cy="25" r="1.5" fill="currentColor" className="text-accent-200" />
                            <circle cx="25" cy="75" r="2.5" fill="currentColor" className="text-white" />
                            <circle cx="75" cy="75" r="1" fill="currentColor" className="text-primary-200" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hotel-quotation-pattern)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-secondary-300/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-accent-300/20 to-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-secondary-300/20 to-accent-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

            <div className="relative mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-0">
                    <div className="text-center">
                        {/* Service Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-white to-secondary-200 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </div>
                            <span className="text-white font-semibold text-lg">Cotización Personalizada</span>
                        </div>

                        <h2 id="hotel-quotation-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
                            ¿Listo para tu <span className="bg-gradient-to-r from-secondary-300 via-accent-300 to-white bg-clip-text text-transparent">próxima aventura</span>?
                        </h2>
                        
                        <div className="h-1 w-24 bg-gradient-to-r from-secondary-400 via-accent-400 to-white rounded-full mx-auto mb-8"></div>
                        
                        <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
                            Compártenos los detalles de tu viaje y te cotizaremos las mejores opciones. 
                            Ya sea que busques vuelos, hoteles, o paquetes completos, nuestros expertos encontrarán 
                            las mejores tarifas que se adapten perfectamente a tu presupuesto y preferencias.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-white mb-2">Vuelos</h3>
                                <p className="text-white/80 text-sm">Las mejores tarifas aéreas</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-white mb-2">Hoteles</h3>
                                <p className="text-white/80 text-sm">Hospedaje de calidad</p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-white mb-2">Paquetes</h3>
                                <p className="text-white/80 text-sm">Todo incluido</p>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
                            <div className="mb-6">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-white/90 font-medium text-sm">Disponible 24/7</span>
                                </div>
                                
                                <div className="flex items-center justify-center gap-6 text-white/80 text-sm mb-6">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Mejor precio garantizado</span>
                                    </div>
                                    <div className="w-px h-4 bg-white/30"></div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Respuesta inmediata</span>
                                    </div>
                                </div>
                            </div>
                            
                            <Link
                                href="https://wa.me/+523314331600?text=Hola,%20quiero%20cotizar%20mi%20viaje.%20Mis%20planes%20son:"
                                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-white to-secondary-100 hover:from-secondary-50 hover:to-white text-primary-800 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 text-lg w-full sm:w-auto"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Escribir por WhatsApp para cotizar vuelos y hoteles (se abre en una nueva pestaña)"
                            >
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                    </svg>
                                </div>
                                <span>Cotizar por WhatsApp</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            
                            <p className="text-white/60 text-xs mt-4">
                                * Te responderemos en menos de 30 minutos durante horario comercial
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
