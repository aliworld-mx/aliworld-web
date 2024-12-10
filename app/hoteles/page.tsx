import { Metadata } from "next";
import { ExpediaHotelsSearchWidget } from "../_components/Expedia/ExpediaHotelsSearchWidget"
import { HotelesSearchWidget } from "../_components/Hoteles/HotelesSearchWidget"
import Image from "next/image";
import hotelesImage from "../../public/hoteles.jpg";
import { Partners } from "../_components/Partners";
import { ExpediaBenefits } from "../_components/Expedia/ExpediaBenefits";

export const metadata: Metadata = {
    title: 'Reserva Hoteles | Aliworld',
    description: 'Reserva tu hotel con beneficios exclusivos. Aliworld esta afiliada con Expedia y Hoteles.com para ofrece las mejores tarifas en reserva de hoteles alrededor del mundo.',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/hoteles',
        title: 'Reserva Hoteles | Aliworld',
        siteName: 'Aliworld',
        description: 'Reserva tu hotel con beneficios exclusivos. Aliworld esta afiliada con Expedia y Hoteles.com para ofrece las mejores tarifas en reserva de hoteles alrededor del mundo.',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/hoteles',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};

export const revalidate = 36000;

export default function HotelesPage() {
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
                                        Reserva tu hotel con beneficios exclusivos
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-600">
                                        Aliworld esta afiliada con Expedia y Hoteles.com para ofrecerte las mejores tarifas en reserva de hoteles alrededor del mundo. Usa el buscador para encontrar el hotel que mejor se adapte a tus necesidades y se te redirigirá a la página de Expedia o Hoteles.com para completar tu reserva.
                                    </p>
                                    <div className="mt-12">
                                        <ExpediaHotelsSearchWidget />
                                    </div>
                                    <div className="mt-6">
                                        <HotelesSearchWidget />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-48 w-full sm:h-64 hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
                        <Image
                            alt="Senso-ji en Tokio"
                            src={hotelesImage}
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
