import { BanknotesIcon, CalendarDaysIcon, GlobeAmericasIcon } from "@heroicons/react/20/solid"


const incentives = [
    {
        name: 'Gran variedad de opciones de viaje',
        icon: GlobeAmericasIcon,
        description: "Aliworld te permite buscar y reservar vuelos, hoteles, alquileres de autos y paquetes vacacionales en un solo lugar. Su extensa red de socios garantiza opciones para todos los presupuestos y destinos.",
    },
    {
        name: '¿Cambios de planes? Sin problema',
        icon: CalendarDaysIcon,
        description: "La mayoría de las reservaciones de hoteles en Aliworld son reembolsables y no tienen cargos por cancelación. Además, puedes modificar tu reservación en línea o comunicarte con el equipo de soporte para obtener ayuda. *Ver términos y condiciones en la página de reservación al escoger su hotel.",
    },
    {
        name: 'Paga en tu moneda local o con criptomonedas*',
        icon: BanknotesIcon,
        description:
            "Aliworld permite pagar con criptomonedas o tarjetas de crédito y débito. Además, puedes ver los precios en tu moneda local para evitar sorpresas en el tipo de cambio. *Solo para reservaciones de hoteles.",
    },
]

export const ExpediaBenefits = () => {
    return (
        <section className="bg-sky-600" aria-labelledby="aliworld-benefits-heading" role="region">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <header className="max-w-3xl text-center mx-auto mb-8">
                        <h2 id="aliworld-benefits-heading" className="text-4xl font-extrabold tracking-tight text-white">
                            ¿Por qué elegir Aliworld?
                        </h2>
                        <p className="mt-4 text-lg text-gray-100">
                            Aliworld cuenta con una amplia selección de hoteles, vuelos, paquetes vacacionales y actividades en todo el mundo. Te ofrecemos el mejor precio y la garantía de un servicio de calidad en cada reservación.
                        </p>
                    </header>
                    <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3" role="list">
                        {incentives.map((incentive, idx) => (
                            <li
                                key={incentive.name}
                                className="group flex flex-col items-center text-center bg-white/10 rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-white outline-none"
                                tabIndex={0}
                                aria-labelledby={`benefit-title-${idx}`}
                            >
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:bg-white/30 group-focus-visible:bg-white/30 transition">
                                    <incentive.icon className="w-10 h-10 text-white drop-shadow" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2" id={`benefit-title-${idx}`}>{incentive.name}</h3>
                                <p className="text-base text-gray-100" >{incentive.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
