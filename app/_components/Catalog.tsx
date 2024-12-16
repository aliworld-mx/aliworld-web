import Link from "next/link"
import actividadesImage from "../../public/catalog/actividades.jpg";
import vuelosImage from "../../public/catalog/vuelos.jpg";
import hotelesImage from "../../public/catalog/hoteles.jpg";
import paquetesImage from "../../public/catalog/paquetes.jpg";
import Image from "next/image";

const features = [
    {
        name: 'Paquetes de Viaje',
        description: 'Paquetes con tour guiado, hospedaje y transporte incluido.',
        href: '/paquetes',
        imageSrc: paquetesImage,
        imageAlt: 'Fotografía de la Torre Eiffel en París.',
    },
    {
        name: 'Hoteles',
        description: 'Reserva tu hotel con beneficios exclusivos. ¡Encuentra el mejor precio!',
        href: '/hoteles',
        imageSrc: hotelesImage,
        imageAlt: 'Fotografía del hotel Park Inn en Berlín.',
    },
    {
        name: 'Vuelos',
        description: 'Busca entre la mayor variedad de vuelos nacionales e internacionales.',
        href: '/vuelos',
        imageSrc: vuelosImage,
        imageAlt: 'Fotografía del océano desde un avión.',
    },
    {
        name: 'Actividades',
        description: 'Entradas a parques temáticos, tours, actividades y museos en todo el mundo.',
        href: '/actividades',
        imageSrc: actividadesImage,
        imageAlt: 'Fotografía de la atracción de Minions en Universal Studios.',
    },
]

export const Catalog = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="max-w-3xl">
                    <h2 id="features-heading" className="font-medium text-gray-500">
                        Nuestro Catálogo
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Somos tu mejor opción para cualquier plan</p>
                    <p className="mt-4 text-gray-500">
                        Paquetes de viaje completos alrededor del mundo, hospedaje en los mejores hoteles, vuelos nacionales e internacionales y actividades para toda la familia.
                    </p>
                </div>

                <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                    {features.map((feature) => (
                        <Link href={feature.href} key={feature.name} className="flex flex-col-reverse">
                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-gray-900">{feature.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                            </div>
                            <Image
                                alt={feature.imageAlt}
                                src={feature.imageSrc}
                                width={400}
                                height={400}
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover object-bottom"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
