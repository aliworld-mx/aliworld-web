import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "¿Cómo puedo reservar un paquete?",
        answer:
            "Para reservar un paquete, puedes hacerlo via WhatsApp. En la página de cada paquete encontrarás un botón para cotizar. Si tienes alguna duda, no dudes en contactarnos.",
        category: "Reservas"
    },
    {
        question: "¿Qué incluyen los paquetes?",
        answer:
            "Cada paquete incluye diferentes servicios, por lo que te recomendamos revisar la descripción de cada uno para más información. Si tienes alguna duda, no dudes en contactarnos.",
        category: "Servicios"
    },
    {
        question: "¿Cuáles son los métodos de pago?",
        answer:
            "Se le envía un link de pago al cliente donde aceptamos tarjetas de crédito y débito. Para más información, contáctanos.",
        category: "Pagos"
    },
    {
        question: "¿Puedo cancelar mi reservación?",
        answer:
            "Si, dependiendo el caso, es posible que puedas cancelar tu reservación. Por favor, revisa nuestras políticas de cancelación para más información.",
        category: "Cancelaciones"
    },
    {
        question: "¿Por qué los paquetes al extranjero estan en USD si la agencia es mexicana?",
        answer:
            "Cuando se trate de excursiones, servicios o paquetes de viaje que tengan destino en el extranjero, dada su naturaleza por ser servicios que se harán uso, goce o disfrute de ellos fuera de México, las publicaciones, los precios de las cotizaciones, confirmaciones, precios totales se presentarán en moneda extranjera, haciendo mención de que el precio de venta será el resultado de la conversión de la moneda extranjera a moneda nacional y podrán ser pagados en Pesos MXN (Moneda Nacional) al tipo de cambio que rija en el lugar y fecha en que se haga el pago único o bien en cada una de las fechas en que se realicen pagos parciales.",
        category: "Precios"
    },
    {
        question: "¿Qué pasa si mi vuelo se retrasa?",
        answer:
            "Si tu vuelo se retrasa, es importante que nos avises lo antes posible vía WhatsApp para apoyarte.",
        category: "Vuelos"
    },
    {
        question: "¿Qué pasa si mi vuelo se cancela?",
        answer:
            "Si tu vuelo se cancela, es importante que nos avises lo antes posible vía WhatsApp para apoyarte.",
        category: "Vuelos"
    },
]

const getCategoryColor = (category: string) => {
    const colors = {
        "Reservas": "from-primary-500 to-primary-600 border-primary-200 text-primary-700",
        "Servicios": "from-secondary-500 to-secondary-600 border-secondary-200 text-secondary-700",
        "Pagos": "from-accent-500 to-accent-600 border-accent-200 text-accent-700",
        "Cancelaciones": "from-purple-500 to-purple-600 border-purple-200 text-purple-700",
        "Precios": "from-amber-500 to-amber-600 border-amber-200 text-amber-700",
        "Vuelos": "from-blue-500 to-blue-600 border-blue-200 text-blue-700",
    }
    return colors[category as keyof typeof colors] || "from-neutral-500 to-neutral-600 border-neutral-200 text-neutral-700"
}

export const FAQs = () => (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 overflow-hidden" aria-labelledby="faqs-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="faqs-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                        <circle cx="60" cy="60" r="4" fill="currentColor" className="text-white" />
                        <circle cx="30" cy="30" r="3" fill="currentColor" className="text-primary-400" />
                        <circle cx="90" cy="30" r="2.5" fill="currentColor" className="text-secondary-400" />
                        <circle cx="30" cy="90" r="3.5" fill="currentColor" className="text-accent-400" />
                        <circle cx="90" cy="90" r="2" fill="currentColor" className="text-white" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#faqs-pattern)" />
            </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-accent-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* FAQ Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20 mb-8">
                        <div className="w-8 h-8 bg-gradient-to-br from-white to-primary-200 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="text-white font-semibold text-lg">Preguntas Frecuentes</span>
                    </div>

                    <h2 id="faqs-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-8 leading-tight">
                        Resolvemos todas <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">tus dudas</span>
                    </h2>
                    
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full mx-auto mb-8"></div>
                    
                    <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                        Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, 
                        procesos de reserva y políticas. Si no encuentras lo que buscas, ¡contáctanos!
                    </p>
                </div>

                {/* FAQs List */}
                <dl className="space-y-6">
                    {faqs.map((faq, index) => (
                        <Disclosure key={faq.question} as="div" className="group">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                                <dt>
                                    <DisclosureButton className="group/button flex w-full items-start justify-between text-left p-6 focus:outline-none focus:ring-4 focus:ring-primary-500/50 hover:bg-white/5 transition-all duration-300">
                                        <div className="flex items-start gap-4 flex-1">
                                            {/* Question Number */}
                                            <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                                                <span className="text-white font-bold text-sm">{index + 1}</span>
                                            </div>
                                            
                                            <div className="flex-1">
                                                {/* Category Badge */}
                                                <div className="mb-3">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(faq.category).split(' ')[0]} ${getCategoryColor(faq.category).split(' ')[1]} text-white/90 border border-white/20`}>
                                                        {faq.category}
                                                    </span>
                                                </div>
                                                
                                                <span className="text-lg font-bold text-white group-hover/button:text-transparent group-hover/button:bg-gradient-to-r group-hover/button:bg-clip-text group-hover/button:from-primary-300 group-hover/button:to-secondary-300 transition-all duration-300">
                                                    {faq.question}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="ml-6 flex-shrink-0">
                                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center group-hover/button:bg-white/20 group-hover/button:border-primary-400/50 transition-all duration-300">
                                                <PlusIcon aria-hidden="true" className="w-5 h-5 text-white group-data-open:hidden transition-all duration-300 group-hover/button:scale-110 group-hover/button:text-primary-300" />
                                                <MinusIcon aria-hidden="true" className="w-5 h-5 text-white [.group:not([data-open])_&]:hidden transition-all duration-300 group-hover/button:scale-110 group-hover/button:text-primary-300" />
                                            </div>
                                        </div>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="px-6 pb-6">
                                    <div className="pl-12 pr-16">
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                            <p className="text-base text-white/80 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>
                    ))}
                </dl>

                {/* Contact CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                ¿No encontraste tu respuesta?
                            </h3>
                            <p className="text-white/80 mb-6">
                                Nuestro equipo de expertos está disponible 24/7 para ayudarte con cualquier consulta
                            </p>
                        </div>
                        
                        <a
                            href="https://wa.me/+523314331600?text=Hola,%20tengo%20una%20pregunta%20sobre%20sus%20servicios"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-primary-100 hover:from-primary-50 hover:to-white text-primary-800 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
                            </div>
                            <span>Contactar por WhatsApp</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
