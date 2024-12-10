import { CalendarDaysIcon, CheckBadgeIcon, CurrencyDollarIcon } from "@heroicons/react/20/solid"


const incentives = [
    {
        name: 'Ofertas Exclusivas y Precios Competitivos',
        icon: <CurrencyDollarIcon className="text-white size-12" />,
        description: "Klook ofrece descuentos exclusivos y precios altamente competitivos en actividades y atracciones populares en todo el mundo. ¡Ahorra dinero mientras disfrutas de experiencias inolvidables!",
    },
    {
        name: 'Reservas Fáciles y Confirmación Inmediata',
        icon: <CalendarDaysIcon className="text-white size-12" />,
        description: "Con Klook, puedes reservar actividades en cuestión de minutos y recibir confirmación instantánea. Además, puedes mostrar tu boleto digital en tu teléfono, sin necesidad de imprimir nada.",
    },
    {
        name: 'Opiniones Verificadas y Experiencias Curadas',
        icon: <CheckBadgeIcon className="text-white size-12" />,
        description:
            "Todas las actividades en Klook están respaldadas por miles de opiniones verificadas de viajeros reales. Esto garantiza que vivas experiencias auténticas y de calidad en cada destino.",
    },
]

export const KlookBenefits = () => {
    return (
        <div className="bg-sky-600">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-bold tracking-tight text-white">
                            ¿Por qué elegir Klook?
                        </h2>
                        <p className="mt-4 text-white">
                            Klook es una plataforma de reservas de actividades y atracciones turísticas líder en Asia y el mundo. Con Klook, puedes reservar experiencias únicas y emocionantes en más de 300 destinos internacionales. Descubre por qué millones de viajeros eligen Klook para sus vacaciones. Ademas puedes recibir KlookCash por cada compra que puedes canjear por más experiencias.
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
                    <p className="text-white">- Los beneficios pueden variar según la actividad y la ubicación.</p>
                    <p className="text-white">- Los servicios contratados a través de Klook son responsabilidad exclusiva de dicha plataforma. Para cualquier consulta relacionada con cancelaciones, reembolsos o políticas, será necesario comunicarse directamente con Klook, ya que estarán sujetos a sus términos y condiciones.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
