import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "¿Cómo puedo reservar un paquete?",
        answer:
            "Para reservar un paquete, puedes hacerlo via WhatsApp. En la página de cada paquete encontrarás un botón para cotizar. Si tienes alguna duda, no dudes en contactarnos.",
    },
    {
        question: "¿Qué incluyen los paquetes?",
        answer:
            "Cada paquete incluye diferentes servicios, por lo que te recomendamos revisar la descripción de cada uno para más información. Si tienes alguna duda, no dudes en contactarnos.",
    },
    {
        question: "¿Cuáles son los métodos de pago?",
        answer:
            "Se le envía un link de pago al cliente donde aceptamos tarjetas de crédito y débito. Para más información, contáctanos.",
    },
    {
        question: "¿Puedo cancelar mi reservación?",
        answer:
            "Si, dependiendo el caso, es posible que puedas cancelar tu reservación. Por favor, revisa nuestras políticas de cancelación para más información.",
    },
    {
        question: "¿Por qué los paquetes al extranjero estan en USD si la agencia es mexicana?",
        answer:
            "Cuando se trate de excursiones, servicios o paquetes de viaje que tengan destino en el extranjero, dada su naturaleza por ser servicios que se harán uso, goce o disfrute de ellos fuera de México, las publicaciones, los precios de las cotizaciones, confirmaciones, precios totales se presentarán en moneda extranjera, haciendo mención de que el precio de venta será el resultado de la conversión de la moneda extranjera a moneda nacional y podrán ser pagados en Pesos MXN (Moneda Nacional) al tipo de cambio que rija en el lugar y fecha en que se haga el pago único o bien en cada una de las fechas en que se realicen pagos parciales.",
    },
    {
        question: "¿Qué pasa si mi vuelo se retrasa?",
        answer:
            "Si tu vuelo se retrasa, es importante que nos avises lo antes posible vía WhatsApp para apoyarte.",
    },
    {
        question: "¿Qué pasa si mi vuelo se cancela?",
        answer:
            "Si tu vuelo se cancela, es importante que nos avises lo antes posible vía WhatsApp para apoyarte.",
    },
]

export const FAQs = () => (
    <section className="bg-gray-900" aria-labelledby="faqs-heading">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl">
                <h2 id="faqs-heading" className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center mb-8">
                    Preguntas Frecuentes
                </h2>
                <dl className="mt-10 space-y-6 divide-y divide-white/10">
                    {faqs.map((faq) => (
                        <Disclosure key={faq.question} as="div" className="pt-6">
                            <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded transition">
                                    <span className="text-base font-semibold text-white flex-1 text-left">
                                        {faq.question}
                                    </span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <PlusIcon aria-hidden="true" className="size-6 text-white cursor-pointer group-data-open:hidden transition-transform duration-200 group-hover:scale-110" />
                                        <MinusIcon aria-hidden="true" className="size-6 text-white cursor-pointer [.group:not([data-open])_&]:hidden transition-transform duration-200 group-hover:scale-110" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" className="mt-2 pr-0 sm:pr-12">
                                <p className="text-base text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    </section>
)
