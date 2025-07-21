import { Metadata } from "next";
import Image from "next/image";
import actividadesImage from "../../../public/actividades.jpg";
import klookAliworldLogo from "../../../public/klookAli.png";
import ActivitiesRow from "@/app/_components/ActivitiesRow";
import { KlookBenefits } from "@/app/_components/Klook/KlookBenefits";
import { PageProps } from "@/.next/types/app/actividades/[etiqueta]/page";
import { humanize } from "@/app/_utils/humanize";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { etiqueta } = await params;

    return {
        title: `${humanize(etiqueta)} | Actividades | Aliworld`,
        description: `Encuentra las mejores actividades en ${humanize(etiqueta)} con Aliworld.`,
        alternates: {
            canonical: `https://www.aliworld.mx/actividades/${etiqueta}`,
        },
        keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'actividades', 'trenes', 'reservaciones', 'aliworld', etiqueta],
        robots: 'index, follow',
    };
}

export const revalidate = 36000;

export default async function ActividadesEtiquetaPage({ params }: PageProps) {
    const { etiqueta } = await params;

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
                <div className="absolute inset-0 bg-linear-to-t from-white" />
            </div>

            <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{`${humanize(etiqueta)} | Actividades`}</h1>
                    <p className="mt-4 text-gray-500">
                        Aliworld trabaja con Klook para ofrecerte las mejores experiencias en parques temáticos, tours, museos, transporte y más. Encuentra la actividad perfecta para tus vacaciones. Desde boletos para Disneyland hasta pases de tren en Europa. Todo en un solo lugar y con los mejores precios.
                    </p>
                </div>
            </div>
            <ActivitiesRow header="" tag={etiqueta} />
            <div className="relative mx-auto mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <Image
                    alt="Klook y Aliworld partners"
                    src={klookAliworldLogo}
                    width={800}
                    height={200}
                    className="w-full sm:w-1/2 object-cover mx-auto"
                />
            </div>
            <KlookBenefits />
        </div>
    )
}
