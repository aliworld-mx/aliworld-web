import Image from "next/image";
import { Catalog } from "../_components/Catalog";
import Socials from "../_components/Socials";
import { Metadata } from "next";
import Link from "next/link";
import { getGuideList } from "../lib/getGuideList";

export const metadata: Metadata = {
    title: 'Guías de Ciudades | Aliworld',
    description: 'Descubre las mejores guías de ciudades para tus viajes. Encuentra información útil y consejos prácticos para explorar cada destino.',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/ciudades',
        title: 'Guías de Ciudades | Aliworld',
        siteName: 'Aliworld',
        description: 'Descubre las mejores guías de ciudades para tus viajes. Encuentra información útil y consejos prácticos para explorar cada destino.',
        locale: 'es_MX',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/blog',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'actividades', 'trenes', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};


export default async function CitiesPage() {
    const guides = await getGuideList();

    return (
        <>
            <div className="bg-white py-12 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Guías de Ciudades
                        </h1>
                        <p className="mt-2 text-lg/8 text-gray-600">Conoce más sobre las ciudades más increibles.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {guides?.map((guide) => {
                            const {
                                nombreDeCiudad,
                                descripcion,
                                imagenContenido,
                                slug,
                            } = guide.fields;

                            console.log(guide.fields);

                            return (
                                <Link href={`/ciudades/${slug}`} key={slug} className="group">
                                    <article key={slug} className="flex flex-col items-start justify-between">
                                        <div className="relative w-full">
                                            <Image
                                                alt={descripcion}
                                                src={`https:${imagenContenido.fields?.file?.url}`}
                                                width={800}
                                                height={450}
                                                className="aspect-video w-full rounded-2xl shadow-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:opacity-75 transition duration-300 ease-in-out"
                                            />
                                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="max-w-xl">
                                            <div className="relative">
                                                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:underline">
                                                    {nombreDeCiudad}
                                                </h3>
                                                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{descripcion}</p>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <Socials />
                <Catalog />
            </div>
        </>
    )
}
