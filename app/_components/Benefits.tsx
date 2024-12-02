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
        <div className="bg-sky-700">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight text-white">
                            ¿Que nos hace diferentes?
                        </h2>
                        <p className="mt-4 text-gray-100">
                            Nuestra misión es hacer de cada viaje una experiencia inolvidable. Que tu corazón se quede en cada lugar que visites y que cada recuerdo sea un tesoro que atesorares por siempre.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="sm:flex lg:block">
                                <div className="sm:shrink-0">
                                    <incentive.icon className="w-12 h-12 text-white" aria-hidden="true" />
                                </div>
                                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-sm font-medium text-white">{incentive.name}</h3>
                                    <p className="mt-2 text-sm text-gray-100">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
