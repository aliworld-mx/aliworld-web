import Link from "next/link"
import actividadesImage from "../../public/catalog/actividades.jpg";
import vuelosImage from "../../public/catalog/vuelos.jpg";
import hotelesImage from "../../public/catalog/hoteles.jpg";
import paquetesImage from "../../public/catalog/paquetes.jpg";
import Image from "next/image";

const features = [
    {
        name: 'Paquetes de Viaje',
        description: 'Paquetes en tour con guía, vuelos, hospedaje y transporte incluido.',
        href: '/paquetes',
        imageSrc: paquetesImage,
        imageAlt: 'Fotografía de un templo budista en Japón.',
    },
    {
        name: 'Hoteles',
        description: 'Reserva tu hotel con beneficios exclusivos. ¡Encuentra el mejor precio!',
        href: 'https://reservas.aliworld.mx/',
        imageSrc: hotelesImage,
        imageAlt: 'Fotografía del hotel Park Inn en Berlín.',
    },
    {
        name: 'Vuelos',
        description: 'Busca entre la mayor variedad de vuelos nacionales e internacionales.',
        href: 'https://reservas.aliworld.mx/',
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
        <section className="bg-gray-100" aria-labelledby="catalog-heading">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <header className="max-w-3xl mx-auto text-center">
                    <h2 id="catalog-heading" className="text-4xl font-extrabold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Tenemos todo para tu viaje
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        Paquetes de viaje completos alrededor del mundo, hospedaje en los mejores hoteles, vuelos nacionales e internacionales y actividades para toda la familia.
                    </p>
                </header>
                <div className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <Link
                            href={feature.href}
                            key={feature.name}
                            className="flex flex-col-reverse group rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:shadow-sky-500/50"
                            target={feature.href.startsWith('http') ? '_blank' : undefined}
                            rel={feature.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={feature.name}
                        >
                            <div className="mt-6 px-2 pb-4 text-center">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:underline mb-2">{feature.name}</h3>
                                <p className="text-sm text-gray-700 min-h-[48px]">{feature.description}</p>
                            </div>
                            <div className="relative">
                                <Image
                                    alt={feature.imageAlt}
                                    src={feature.imageSrc}
                                    width={400}
                                    height={400}
                                    className="aspect-square w-full rounded-t-2xl object-cover object-bottom group-hover:opacity-90 transition duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
