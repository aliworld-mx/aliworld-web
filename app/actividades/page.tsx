import { Metadata } from "next";
import Image from "next/image";
import actividadesImage from "../../public/actividades.jpg";
import klookAliworldLogo from "../../public/klookAli.png";
import { KlookSearchWidget } from "../_components/Klook/KlookSearchWidget";
import { Partners } from "../_components/Partners";
import { KlookBenefits } from "../_components/Klook/KlookBenefits";
import ActivitiesRow from "../_components/ActivitiesRow";
import HotelQuotation from "../_components/HotelQuotation";

export const metadata: Metadata = {
    title: 'Actividades | Aliworld',
    description: 'Paquetes para parques temáticos, tours, museos, transporte y más. Aliworld te ofrece las mejores experiencias para tus vacaciones.',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/actividades',
        title: 'Actividades | Aliworld',
        siteName: 'Aliworld',
        description: 'Paquetes para parques temáticos, tours, museos, transporte y más. Aliworld te ofrece las mejores experiencias para tus vacaciones.',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/actividades',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'actividades', 'trenes', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};

export const revalidate = 36000;

export default async function ActividadesPage() {
    return (
        <div className="bg-white">
            <div aria-hidden="true" className="relative">
                <Image
                    alt="Super Nintendo World en Osaka"
                    src={actividadesImage}
                    width={1900}
                    height={1200}
                    className="h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white" />
            </div>

            <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Actividades</h1>
                    <p className="mt-4 text-gray-500">
                        Aliworld trabaja con Klook para ofrecerte las mejores experiencias en parques temáticos, tours, museos, transporte y más. Encuentra la actividad perfecta para tus vacaciones. Desde boletos para Disneyland hasta pases de tren en Europa. Todo en un solo lugar y con los mejores precios.
                    </p>
                </div>
                <Image
                    alt="Klook y Aliworld partners"
                    src={klookAliworldLogo}
                    width={800}
                    height={200}
                    className="w-full mt-12 sm:w-1/2 object-cover mx-auto"
                />
            </div>
            <ActivitiesRow header="Maravillate con los Parques de Disney" tag='disney' show={3} />
            <ActivitiesRow header="Vive aventuras sorprendentes en México" tag='mexico' show={3} />
            <ActivitiesRow header="Descubre todo lo que Japón tiene para ti" tag='japon' show={3} />
            <ActivitiesRow header="Actividades únicas en Ámsterdam" tag='amsterdam' show={3} />
            <div className="mx-auto mt-16 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <KlookSearchWidget />
            </div>
            <KlookBenefits />
            <Partners />
            <HotelQuotation />
        </div>
    )
}
