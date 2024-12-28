import { BanknotesIcon, CalendarDaysIcon, GlobeAmericasIcon } from "@heroicons/react/20/solid"


const incentives = [
    {
        name: 'Gran variedad de opciones de viaje',
        icon: <GlobeAmericasIcon className="text-white size-12" />,
        description: "Aliworld te permite buscar y reservar vuelos, hoteles, alquileres de autos y paquetes vacacionales en un solo lugar. Su extensa red de socios garantiza opciones para todos los presupuestos y destinos.",
    },
    {
        name: '¿Cambios de planes? Sin problema',
        icon: <CalendarDaysIcon className="text-white size-12" />,
        description: "La mayoría de las reservaciones de hoteles en Aliworld son reembolsables y no tienen cargos por cancelación. Además, puedes modificar tu reservación en línea o comunicarte con el equipo de soporte para obtener ayuda. *Ver términos y condiciones en la página de reservación al escoger su hotel.",
    },
    {
        name: 'Paga en tu moneda local o con criptomonedas',
        icon: <BanknotesIcon className="text-white size-12" />,
        description:
            "Aliworld permite pagar con criptomonedas o tarjetas de crédito y débito. Además, puedes ver los precios en tu moneda local para evitar sorpresas en el tipo de cambio.",
    },
]

export const ExpediaBenefits = () => {
    return (
        <div className="bg-sky-600">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight text-white">
                            ¿Por qué elegir Aliworld?
                        </h2>
                        <p className="mt-4 text-white">
                            Aliworld cuenta con una amplia selección de hoteles, vuelos, paquetes vacacionales y actividades en todo el mundo. Te ofrecemos el mejor precio y la garantía de un servicio de calidad en cada reservación.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="sm:flex lg:block">
                                <div className="sm:shrink-0">
                                    {incentive.icon}
                                </div>
                                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-sm font-bold text-white">{incentive.name}</h3>
                                    <p className="mt-2 text-sm text-white">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
