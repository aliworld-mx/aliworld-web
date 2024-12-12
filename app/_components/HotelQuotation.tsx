import { CalendarDaysIcon, CheckBadgeIcon, CreditCardIcon } from "@heroicons/react/20/solid"
import { HotelQuotationForm } from "./HotelQuotationForm"

const incentives = [
    {
        name: 'Paga hasta en 24 meses',
        icon: CreditCardIcon,
        description: "Paga de contado o hasta 24 meses con tarjetas de crédito participantes. Nos adaptamos a tus necesidades. Aceptamos tarjetas de crédito y débito para mayor comodidad y seguridad.",
    },
    {
        name: 'Reserva hoy y paga después',
        icon: CalendarDaysIcon,
        description: "Elige tu hotel, paga un anticipo y el resto directamente al hotel cuando hagas check-in. Sujeto a disponibilidad y políticas del hotel.",
    },
    {
        name: 'Ofertas Exclusivas',
        icon: CheckBadgeIcon,
        description: "Un hotel todo incluido en Puerto Vallarta, un hotel boutique en París o un resort en Cancún. Encuentra las mejores ofertas en hoteles de todo el mundo.",
    },
]

export default function HotelQuotation() {
    return (
        <div className="bg-sky-700">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-white text-center">
                            ¿Buscas solo el hotel? Nuestros expertos te ayudan a elegir
                        </h2>
                        <p className="mt-4 text-gray-100 text-center">
                            ¿Quieres un hotel con todo incluido? ¿O prefieres un hotel boutique? Nuestros expertos en viajes te ayudarán a elegir el hotel perfecto para tus vacaciones.
                        </p>
                        <HotelQuotationForm />
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
