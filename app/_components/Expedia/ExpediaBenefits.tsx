import { ChatBubbleLeftRightIcon, GlobeAmericasIcon, StarIcon } from "@heroicons/react/20/solid"


const incentives = [
    {
        name: 'Gran variedad de opciones de viaje',
        icon: <GlobeAmericasIcon className="text-white size-12" />,
        description: "Expedia te permite buscar y reservar vuelos, hoteles, alquileres de autos y paquetes vacacionales en un solo lugar. Su extensa red de socios garantiza opciones para todos los presupuestos y destinos.",
    },
    {
        name: 'Programas de recompensas y ofertas exclusivas',
        icon: <StarIcon className="text-white size-12" />,
        description: "Con Expedia Rewards, acumulas puntos en cada reserva que puedes canjear en futuros viajes. Además, encontrarás descuentos exclusivos en paquetes y tarifas para miembros.",
    },
    {
        name: 'Asistencia al cliente las 24 horas',
        icon: <ChatBubbleLeftRightIcon className="text-white size-12" />,
        description:
            "Expedia ofrece soporte al cliente en múltiples idiomas, asegurando que tengas ayuda disponible antes, durante y después de tu viaje.",
    },
]

export const ExpediaBenefits = () => {
    return (
        <div className="bg-sky-600">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight text-white">
                            ¿Por qué elegir Expedia?
                        </h2>
                        <p className="mt-4 text-white">
                           Expedia es una de las plataformas de viajes más grandes y reconocidas a nivel mundial. Con Expedia, puedes reservar vuelos, hoteles, alquileres de autos y paquetes vacacionales en un solo lugar. Ademas puedes reservar y pagar hasta que llegues al hotel, comprar con meses sin intereses y acumular puntos en cada reserva que puedes canjear en futuros viajes. Descubre por qué millones de viajeros eligen Expedia para sus vacaciones.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="sm:flex lg:block">
                                <div className="sm:shrink-0">
                                    {incentive.icon}
                                </div>
                                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-sm font-medium text-white">{incentive.name}</h3>
                                    <p className="mt-2 text-sm text-white">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4 mt-12"> 
                    <p className="text-white">- Los beneficios pueden variar según la reservación y la ubicación.</p>
                    <p className="text-white">- Los servicios contratados a través de Expedia son responsabilidad exclusiva de dicha plataforma. Para cualquier consulta relacionada con cancelaciones, reembolsos o políticas, será necesario comunicarse directamente con Expedia, ya que estarán sujetos a sus términos y condiciones.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
