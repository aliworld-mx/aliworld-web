import Link from "next/link"

export default function HotelQuotation() {
    return (
        <div className="bg-sky-700">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-white text-center">
                            ¿Buscas solo el hotel o vuelo? ¡Reserva con nosotros!
                        </h2>
                        <p className="mt-4 text-gray-100 text-center">
                            ¿Quieres un hotel con todo incluido? ¿O prefieres un hotel boutique? Accede a nuestro portal de reservas y encuentra el hotel que mejor se adapte a tus necesidades. Con un extenso catálogo de hoteles, podrás elegir entre una amplia variedad de opciones y las mejores ofertas. ¡Reserva ya!
                        </p>
                        <Link href="https://reservas.aliworld.mx"
                            className="flex mt-6 w-max mx-auto items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                        >
                            Reservar ahora
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
