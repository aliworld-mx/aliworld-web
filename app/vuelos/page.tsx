import { Metadata } from "next";
import { ExpediaFlightsSearchWidget } from "../_components/Expedia/ExpediaFlightsSearchWidget"
import Image from "next/image";
import vuelosImage from "../../public/vuelos.jpg";
import { Partners } from "../_components/Partners";
import { ExpediaBenefits } from "../_components/Expedia/ExpediaBenefits";


export const metadata: Metadata = {
    title: 'Reserva Vuelos | Aliworld',
    description: 'Reserva tu vuelo con beneficios exclusivos. Aliworld esta afiliada con Expedia para ofrece las mejores tarifas en vuelos nacionales e internacionales.',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/vuelos',
        title: 'Reserva Vuelos | Aliworld',
        siteName: 'Aliworld',
        description: 'Reserva tu vuelo con beneficios exclusivos. Aliworld esta afiliada con Expedia para ofrece las mejores tarifas en vuelos nacionales e internacionales.',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/vuelos',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'vuelos', 'hoteles', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};

export const revalidate = 1;

export default function VuelosPage() {
    return (
        <div className="bg-white">
            <div className="flex flex-col border-b border-gray-200 lg:border-0">
                <div className="relative">
                    <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
                    <div className="relative bg-gray-100 lg:bg-transparent">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                            <div className="mx-auto max-w-2xl py-24 lg:max-w-none">
                                <div className="lg:pr-16">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                        Reserva tus vuelos con la mejor tarifa
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-600">
                                        Aliworld esta afiliada con Expedia para ofrecerte las mejores tarifas en vuelos nacionales e internacionales. Usa el buscador para encontrar el vuelo que mejor se adapte a tus necesidades y se te redirigirá a la página de Expedia para completar tu compra.
                                    </p>
                                    <div className="mt-6">
                                        <ExpediaFlightsSearchWidget />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
                        <Image
                            alt="Monte Fuji en Japón"
                            src={vuelosImage}
                            width={950}
                            height={1500}
                            className="size-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <Partners />
            <ExpediaBenefits />
        </div>
    )
}
