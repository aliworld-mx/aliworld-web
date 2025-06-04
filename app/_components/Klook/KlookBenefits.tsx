import { CalendarDaysIcon, CheckBadgeIcon, CurrencyDollarIcon } from "@heroicons/react/20/solid"


const incentives = [
    {
        name: 'Ofertas Exclusivas y Precios Competitivos',
        icon: CurrencyDollarIcon,
        description: "Klook ofrece descuentos exclusivos y precios altamente competitivos en actividades y atracciones populares en todo el mundo. ¡Ahorra dinero mientras disfrutas de experiencias inolvidables!",
    },
    {
        name: 'Reservas Fáciles y Confirmación Inmediata',
        icon: CalendarDaysIcon,
        description: "Con Klook, puedes reservar actividades en cuestión de minutos y recibir confirmación instantánea. Además, puedes mostrar tu boleto digital en tu teléfono, sin necesidad de imprimir nada.",
    },
    {
        name: 'Opiniones Verificadas y Experiencias Curadas',
        icon: CheckBadgeIcon,
        description:
            "Todas las actividades en Klook están respaldadas por miles de opiniones verificadas de viajeros reales. Esto garantiza que vivas experiencias auténticas y de calidad en cada destino.",
    },
]

export const KlookBenefits = () => {
    return (
        <section className="bg-sky-600" aria-labelledby="benefits-heading">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <header className="max-w-3xl text-center mx-auto">
                        <h2 id="benefits-heading" className="text-4xl font-extrabold tracking-tight text-white">
                            ¿Por qué elegir Klook?
                        </h2>
                        <p className="mt-4 text-lg text-gray-100">
                            Klook es una plataforma de reservas de actividades y atracciones turísticas líder en Asia y el mundo. Con Klook, puedes reservar experiencias únicas y emocionantes en más de 300 destinos internacionales. Descubre por qué millones de viajeros eligen Klook para sus vacaciones. Ademas puedes recibir KlookCash por cada compra que puedes canjear por más experiencias.
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
                    <div className="space-y-4 mt-12"> 
                    <p className="text-white">- Los beneficios pueden variar según la actividad y la ubicación.</p>
                    <p className="text-white">- Los servicios contratados a través de Klook son responsabilidad exclusiva de dicha plataforma. Para cualquier consulta relacionada con cancelaciones, reembolsos o políticas, será necesario comunicarse directamente con Klook, ya que estarán sujetos a sus términos y condiciones.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
