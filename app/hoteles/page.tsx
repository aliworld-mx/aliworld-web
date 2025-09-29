import { Metadata } from "next";
import Image from "next/image";
import hotelesImage from "../../public/hoteles.jpg";
import { ExpediaBenefits } from "../_components/Expedia/ExpediaBenefits";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Reserva Hoteles | Aliworld',
    description: 'Reserva tu hotel con beneficios exclusivos. Aliworld cuenta con un amplio catálogo de hoteles alrededor del mundo. Encuentra el mejor precio y beneficios exclusivos en tu próxima reservación. Además, puedes pagar con criptomonedas o tarjetas de crédito y débito. ¡Reserva ahora y disfruta de beneficios exclusivos!',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/hoteles',
        title: 'Reserva Hoteles | Aliworld',
        siteName: 'Aliworld',
        description: 'Reserva tu hotel con beneficios exclusivos. Aliworld cuenta con un amplio catálogo de hoteles alrededor del mundo. Encuentra el mejor precio y beneficios exclusivos en tu próxima reservación. Además, puedes pagar con criptomonedas o tarjetas de crédito y débito. ¡Reserva ahora y disfruta de beneficios exclusivos!',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/hoteles',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};

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
                                        Reserva tu hotel al mejor precio
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-600">
                                        Aliworld cuenta con un amplio catálogo de hoteles alrededor del mundo. Encuentra el mejor precio y beneficios exclusivos en tu próxima reservación. ¡Reserva ahora!
                                    </p>
                                    <div className="mt-12 flex justify-center">
                                        <Link href="https://wa.me/+523314331600" className="inline-block px-6 py-3 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700">
                                            Cotizar ahora
                                        </Link>
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
            <ExpediaBenefits />
        </div>
    )
}
