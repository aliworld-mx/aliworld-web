import { CalendarDaysIcon, ChatBubbleLeftRightIcon, CreditCardIcon } from "@heroicons/react/20/solid"

const incentives = [
    {
        name: 'Pagos Flexibles',
        icon: CreditCardIcon,
        description: "Paga de contado o parcialmente, como prefieras. Nos adaptamos a tus necesidades. Aceptamos tarjetas de crédito y débito para mayor comodidad y seguridad.",
    },
    {
        name: 'Atención Personalizada',
        icon: ChatBubbleLeftRightIcon,
        description: "Nuestros asesores te acompañarán en cada paso del proceso. Desde la cotización hasta el regreso a casa, estaremos contigo.",
    },
    {
        name: 'Cambio de Planes',
        icon: CalendarDaysIcon,
        description: "Sabemos que los planes pueden cambiar. Por eso, te ofrecemos la flexibilidad de cambiar de fecha o hasta cancelar tu viaje. Verifica nuestras políticas de cancelación.",
    },
]

export default function Benefits() {
    return (
        <section className="bg-sky-600" aria-labelledby="benefits-heading">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <header className="max-w-3xl text-center mx-auto">
                        <h2 id="benefits-heading" className="text-4xl font-extrabold tracking-tight text-white">
                            ¿Qué nos hace diferentes?
                        </h2>
                        <p className="mt-4 text-lg text-gray-100">
                            Nuestra misión es hacer de cada viaje una experiencia inolvidable. Que tu corazón se quede en cada lugar que visites y que cada recuerdo sea un momento mágico.
                        </p>
                    </header>
                    <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Beneficios de Aliworld">
                        {incentives.map((incentive) => (
                            <li
                                key={incentive.name}
                                className="flex flex-col items-center text-center bg-white/10 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-white"
                                tabIndex={0}
                                aria-label={incentive.name}
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                                    <incentive.icon className="w-10 h-10 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2" id={`benefit-title-${incentive.name.replace(/\s+/g, '-')}`}>{incentive.name}</h3>
                                <p className="text-base text-gray-100" aria-describedby={`benefit-title-${incentive.name.replace(/\s+/g, '-')}`}>{incentive.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
