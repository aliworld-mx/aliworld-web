import { BanknotesIcon, CalendarDaysIcon, CheckBadgeIcon, GlobeAmericasIcon } from "@heroicons/react/20/solid"
import { SparklesIcon } from "@heroicons/react/24/outline"


const incentives = [
    {
        name: 'Gran variedad de opciones de viaje',
        icon: GlobeAmericasIcon,
        description: "Nuestros asesores encontraran todo lo que necesites para unas vacaciones maravillosas. Nuestra extensa red de socios garantiza opciones para todos los presupuestos y destinos.",
        color: "from-primary-500 to-primary-600",
        bgColor: "from-primary-500/20 to-primary-600/30",
        number: "01"
    },
    {
        name: '¿Cambio de planes? Sin problema',
        icon: CalendarDaysIcon,
        description: "La mayoría de las reservaciones de hoteles en Aliworld son reembolsables y no tienen cargos por cancelación. Si necesitas cambiar tus planes, puedes hacerlo sin preocupaciones. Pregunta a tu asesor sobre las políticas de cancelación y cambios de fecha.",
        color: "from-secondary-500 to-secondary-600",
        bgColor: "from-secondary-500/20 to-secondary-600/30",
        number: "02"
    },
    {
        name: 'Pagos flexibles',
        icon: BanknotesIcon,
        description: "Tu asesor puede crearte un plan de pagos para ir abonando a tu reservación, tu elijes el monto y la frecuencia de los pagos. *No aplica en vuelos.",
        color: "from-accent-500 to-accent-600",
        bgColor: "from-accent-500/20 to-accent-600/30",
        number: "03"
    },
]

export const ExpediaBenefits = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 overflow-hidden" aria-labelledby="aliworld-benefits-heading" role="region">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="expedia-benefits-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-white" />
                            <circle cx="25" cy="25" r="2" fill="currentColor" className="text-secondary-200" />
                            <circle cx="75" cy="25" r="1.5" fill="currentColor" className="text-accent-200" />
                            <circle cx="25" cy="75" r="2.5" fill="currentColor" className="text-white" />
                            <circle cx="75" cy="75" r="1" fill="currentColor" className="text-primary-200" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#expedia-benefits-pattern)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-white/10 to-secondary-300/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-accent-300/20 to-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-secondary-300/20 to-accent-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

            <div className="relative mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-0">
                    {/* Header */}
                    <header className="text-center mb-20">
                        {/* Benefits Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center">
                                <SparklesIcon className="w-5 h-5 text-white" aria-hidden="true" />
                            </div>
                            <span className="text-white font-semibold text-lg">Ventajas Exclusivas</span>
                        </div>

                        <h2 id="aliworld-benefits-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
                            ¿Por qué elegir <span className="bg-gradient-to-r from-secondary-300 via-accent-300 to-white bg-clip-text text-transparent">Aliworld</span>?
                        </h2>
                        
                        <div className="h-1 w-24 bg-gradient-to-r from-secondary-400 via-accent-400 to-white rounded-full mx-auto mb-8"></div>
                        
                        <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Aliworld cuenta con una amplia selección de hoteles, vuelos, paquetes vacacionales y actividades en todo el mundo. 
                            Te ofrecemos el mejor precio y la garantía de un servicio de calidad en cada reservación.
                        </p>
                    </header>

                    {/* Benefits Grid */}
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20" role="list">
                        {incentives.map((incentive, idx) => (
                            <li
                                key={incentive.name}
                                className="group relative"
                                tabIndex={0}
                                aria-labelledby={`benefit-title-${idx}`}
                            >
                                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50">
                                    {/* Icon Container */}
                                    <div className="relative mb-8">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${incentive.bgColor} rounded-2xl flex items-center justify-center shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                                            <div className={`w-16 h-16 bg-gradient-to-br ${incentive.color} rounded-xl flex items-center justify-center shadow-inner`}>
                                                <incentive.icon className="w-8 h-8 text-white drop-shadow" aria-hidden="true" />
                                            </div>
                                        </div>
                                        
                                        {/* Decorative ring */}
                                        <div className={`absolute -inset-2 bg-gradient-to-br ${incentive.color} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 
                                            className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-secondary-200 transition-all duration-300" 
                                            id={`benefit-title-${idx}`}
                                        >
                                            {incentive.name}
                                        </h3>
                                        
                                        <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
                                            {incentive.description}
                                        </p>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${incentive.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br ${incentive.color} rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Bottom CTA Section */}
                    <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-3xl mx-auto">
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30">
                                    <CheckBadgeIcon className="w-8 h-8 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Garantía de satisfacción total
                                </h3>
                                <p className="text-white/80 mb-8 text-lg">
                                    Cada reservación viene respaldada por nuestro compromiso de excelencia y atención personalizada
                                </p>
                            </div>
                            
                            {/* Trust Indicators */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-center justify-center gap-3 text-white/80">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="font-medium">Servicio 24/7</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-white/80">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium">Mejor precio garantizado</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-white/80">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="font-medium">Reservas seguras</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
