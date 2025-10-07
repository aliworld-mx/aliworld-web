import { CalendarDaysIcon, ChatBubbleLeftRightIcon, CreditCardIcon } from "@heroicons/react/20/solid"

const incentives = [
    {
        name: 'Pagos Flexibles',
        icon: CreditCardIcon,
        description: "Paga de contado o parcialmente, como prefieras. Nos adaptamos a tus necesidades. Aceptamos tarjetas de crédito y débito para mayor comodidad y seguridad.",
        color: "from-primary-500 to-primary-600",
        bgColor: "from-primary-500/20 to-primary-600/30",
        number: "01"
    },
    {
        name: 'Atención Personalizada',
        icon: ChatBubbleLeftRightIcon,
        description: "Nuestros asesores te acompañarán en cada paso del proceso. Desde la cotización hasta el regreso a casa, estaremos contigo.",
        color: "from-secondary-500 to-secondary-600",
        bgColor: "from-secondary-500/20 to-secondary-600/30",
        number: "02"
    },
    {
        name: 'Cambio de Planes',
        icon: CalendarDaysIcon,
        description: "Sabemos que los planes pueden cambiar. Por eso, te ofrecemos la flexibilidad de cambiar de fecha o hasta cancelar tu viaje. Verifica nuestras políticas de cancelación.",
        color: "from-accent-500 to-accent-600",
        bgColor: "from-accent-500/20 to-accent-600/30",
        number: "03"
    },
]

export default function Benefits() {
    return (
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 overflow-hidden" aria-labelledby="benefits-heading">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="benefits-pattern" x="0" y="0" width="110" height="110" patternUnits="userSpaceOnUse">
                            <circle cx="55" cy="55" r="3.5" fill="currentColor" className="text-white" />
                            <circle cx="27.5" cy="27.5" r="2.5" fill="currentColor" className="text-secondary-200" />
                            <circle cx="82.5" cy="27.5" r="2" fill="currentColor" className="text-accent-200" />
                            <circle cx="27.5" cy="82.5" r="3" fill="currentColor" className="text-white" />
                            <circle cx="82.5" cy="82.5" r="1.5" fill="currentColor" className="text-primary-200" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#benefits-pattern)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-white/10 to-secondary-300/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-44 h-44 bg-gradient-to-br from-accent-300/20 to-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-secondary-300/20 to-accent-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

            <div className="relative mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl px-6 lg:px-0">
                    {/* Header */}
                    <header className="text-center mb-20">
                        {/* Benefits Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 mb-8">
                            <div className="w-8 h-8 bg-gradient-to-br from-white to-secondary-200 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <span className="text-white font-semibold text-lg">Nuestros Beneficios</span>
                        </div>

                        <h2 id="benefits-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
                            ¿Qué nos hace <span className="bg-gradient-to-r from-secondary-300 via-accent-300 to-white bg-clip-text text-transparent">diferentes</span>?
                        </h2>
                        
                        <div className="h-1 w-24 bg-gradient-to-r from-secondary-400 via-accent-400 to-white rounded-full mx-auto mb-8"></div>
                        
                        <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Nuestra misión es hacer de cada viaje una experiencia inolvidable. 
                            Que tu corazón se quede en cada lugar que visites y que cada recuerdo sea un momento mágico.
                        </p>
                    </header>

                    {/* Benefits Grid */}
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" role="list" aria-label="Beneficios de Aliworld">
                        {incentives.map((incentive) => (
                            <li
                                key={incentive.name}
                                className="group relative"
                                tabIndex={0}
                                aria-label={incentive.name}
                            >
                                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50">
                                    {/* Benefit Number Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center border border-white/30">
                                        <span className="text-white font-black text-sm">{incentive.number}</span>
                                    </div>

                                    {/* Icon Container */}
                                    <div className="relative mb-8">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${incentive.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                                            <div className={`w-16 h-16 bg-gradient-to-br ${incentive.color} rounded-xl flex items-center justify-center shadow-inner`}>
                                                <incentive.icon className="w-8 h-8 text-white" aria-hidden="true" />
                                            </div>
                                        </div>
                                        
                                        {/* Decorative ring */}
                                        <div className={`absolute -inset-2 bg-gradient-to-br ${incentive.color} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 
                                            className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-secondary-200 transition-all duration-300" 
                                            id={`benefit-title-${incentive.name.replace(/\s+/g, '-')}`}
                                        >
                                            {incentive.name}
                                        </h3>
                                        
                                        <p 
                                            className="text-white/90 leading-relaxed line-clamp-4 group-hover:text-white transition-colors duration-300" 
                                            aria-describedby={`benefit-title-${incentive.name.replace(/\s+/g, '-')}`}
                                        >
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

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Creamos recuerdos inolvidables
                                </h3>
                                <p className="text-white/80 mb-6">
                                    Cada viaje es una oportunidad única de crear experiencias que durarán toda la vida
                                </p>
                            </div>
                            
                            <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
                                <div className="flex items-center gap-2">
                                    <span>Servicio 24/7</span>
                                </div>
                                <div className="w-px h-4 bg-white/30"></div>
                                <div className="flex items-center gap-2">
                                    <span>Mejor precio garantizado</span>
                                </div>
                                <div className="w-px h-4 bg-white/30"></div>
                                <div className="flex items-center gap-2">
                                    <span>Viajes seguros</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
