import Link from "next/link"

export default function HotelQuotation() {
    return (
        <section className="bg-sky-700" aria-labelledby="hotel-quotation-heading">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 id="hotel-quotation-heading" className="text-4xl font-bold tracking-tight text-white">
                            ¿Necesitas vuelos y/o hoteles? ¡Escríbenos tus planes!
                        </h2>
                        <p className="mt-4 text-gray-100">
                            Compártenos los detalles de tu viaje y te cotizaremos las mejores opciones. Ya sea que busques vuelos, hoteles, o ambos, nuestros expertos encontrarán las mejores tarifas y opciones que se adapten perfectamente a tu presupuesto y preferencias. ¡Escríbenos ahora!
                        </p>
                        <Link
                            href="https://wa.me/+523314331600?text=Hola,%20quiero%20cotizar%20mi%20viaje.%20Mis%20planes%20son:"
                            className="flex mt-6 w-max mx-auto items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-sky-700 shadow-lg transition"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Escribir por WhatsApp para cotizar vuelos y hoteles (se abre en una nueva pestaña)"
                        >
                            Cotizar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
