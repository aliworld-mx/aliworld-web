import Link from 'next/link'
import Image from 'next/image';
import americaImage from '../public/america.webp';
import europeImage from '../public/europa.jpg';
import asiaImage from '../public/asia.webp';
import samuraiImage from '../public/camino-del-samurai-en-primavera-asia_6748888c987a0.webp';
import colombiaImage from '../public/esencia-colombiana-sudamerica_6747598af2806.webp';
import canadaImage from '../public/magia-invernal-en-niagara-canada_6748871a2f8f1.webp';
import hero1Image from '../public/hero/hero1.jpg';
import hero2Image from '../public/hero/hero2.jpg';
import hero3Image from '../public/hero/hero3.jpg';
import hero4Image from '../public/hero/hero4.jpg';
import hero5Image from '../public/hero/hero5.jpg';
import hero7Image from '../public/hero/hero7.jpg';
import hero8Image from '../public/hero/hero8.jpg';
import hero9Image from '../public/hero/hero9.jpg';
import hero10Image from '../public/hero/hero10.jpg';
import { PercentBadgeIcon } from '@heroicons/react/20/solid';
import Benefits from './_components/Benefits';
import { WithContext, TravelAgency } from 'schema-dts';
import { getMetadata } from './lib/getMetadata';
import { TypePaquete } from './_types/contentful/Paquete';

const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: samuraiImage,
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: colombiaImage,
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: canadaImage,
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
]

export const revalidate = 3600;

export default async function InicioPage() {
  const metadataInfo = await getMetadata('5KAGiplsyhBFj5JOtEe5eC');

  const structuredData: WithContext<TravelAgency> = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Aliworld',
    url: "https://www.aliworld.mx",
    currenciesAccepted: ["USD", "MXN"],
    priceRange: "$$",
    openingHours: 'Mo-Fr 09:00-17:00',
    paymentAccepted: 'Credit Card',
    telephone: '+52-33-1433-1600',
    keywords: 'viajes, paquetes, turismo, aventura',
    email: 'contacto@aliworld.mx',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rinconada Del Camichin',
      addressLocality: 'Zapopan',
      addressRegion: 'Jalisco',
      postalCode: '45130',
      addressCountry: 'Mexico',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Mexico',
      },
    ],
    hasOfferCatalog: [
      {
        '@type': 'OfferCatalog',
        name: 'Paquetes de viaje',
        itemListElement: (metadataInfo?.fields.paquetes as unknown as TypePaquete[])?.map((paquete) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Trip',
            name: paquete.fields?.nombre,
            url: `https://www.aliworld.mx/experiencia/${paquete.fields?.id}`,
            image: paquete.fields?.imagen?.fields.file?.url,
            price: paquete.fields?.precio,
            priceCurrency: paquete.fields?.moneda,
            validFrom: '2024-12-01',
            duration: `P${paquete.fields?.dias}D`,
            destination: {
              '@type': 'Country',
              name: paquete.fields?.destino?.fields?.nombre,
            },
            offers: {
              '@type': 'Offer',
              price: paquete.fields?.precio,
              priceCurrency: paquete.fields?.moneda,
              availability: 'InStock',
              url: `https://www.aliworld.mx/experiencia/${paquete.fields?.id}`,
            },
          },
        })),
      }
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="relative overflow-hidden">
        {/* Hero section */}
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Encuentra tu próximo destino
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Viajar es una de las mejores experiencias que puedes tener, descubre los mejores destinos y vive una gran aventura.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            alt=""
                            width={350}
                            src={hero1Image}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            alt=""
                            width={350}
                            src={hero2Image}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            alt=""
                            width={350}
                            src={hero3Image}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            alt=""
                            width={350}
                            src={hero4Image}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            alt=""
                            width={350}
                            src={hero8Image}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            alt=""
                            width={350}
                            src={hero5Image}
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            alt=""
                            width={350}
                            src={hero7Image}
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/paquetes"
                  className="inline-block rounded-md border border-transparent bg-sky-600 px-8 py-3 text-center font-medium text-white hover:bg-sky-700"
                >
                  Ver Destinos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Buscar por Destino
              </h2>
              <Link href="/paquetes" className="hidden text-sm font-semibold text-sky-600 hover:text-sky-500 sm:block">
                Ver todos los destinos
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
                <Image
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  src={europeImage}
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link href="/paquetes/europa">
                        <span className="absolute inset-0" />
                        Europa
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Ver paquetes
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
                <Image
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  src={asiaImage}
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link href="/paquetes/asia">
                        <span className="absolute inset-0" />
                        Asia
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Ver paquetes
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-[2/1] overflow-hidden rounded-lg sm:aspect-auto">
                <Image
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  src={americaImage}
                  className="absolute size-full object-cover group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <Link href="/paquetes/estados-unidos">
                        <span className="absolute inset-0" />
                        Estados Unidos
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      Ver paquetes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/paquetes" className="block text-sm font-semibold text-sky-600 hover:text-sky-500">
                Ver todos los destinos
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
        <Benefits />
        {/* Favorites section */}
        <section aria-labelledby="favorites-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Nuestros favoritos
              </h2>
              <Link href="/favoritos" className="hidden text-sm font-semibold text-sky-600 hover:text-sky-500 sm:block">
                Ver todos los favoritos
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
              {favorites.map((favorite) => (
                <div key={favorite.id} className="group relative">
                  <Image
                    alt={favorite.imageAlt}
                    src={favorite.imageSrc}
                    className="h-96 w-full rounded-lg object-fit group-hover:opacity-75 sm:aspect-[2/3] sm:h-auto"
                  />
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <a href={favorite.href}>
                      <span className="absolute inset-0" />
                      {favorite.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{favorite.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/favoritos" className="block text-sm font-semibold text-sky-600 hover:text-sky-500">
                Ver todos los favoritos
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section aria-labelledby="sale-heading">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-sky-700">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pb-16 pt-48 sm:pb-24 flex flex-row gap-x-3">
                  <PercentBadgeIcon className="h-12 w-12 text-white" />
                  <div>
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Promociones
                      <br />
                      de temporada
                    </h2>
                    <div className="mt-6 text-base">
                      <Link href="/promociones" className="font-semibold text-white hover:text-gray-200">
                        Ver todas las promociones
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="shrink-0">
                          <Image
                            alt=""
                            width={288}
                            src={hero1Image}
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <Image
                            alt=""
                            width={288}
                            src={hero8Image}
                            className="size-64 rounded-lg object-fit md:size-72"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="shrink-0">
                          <Image
                            alt=""
                            width={288}
                            src={hero9Image}
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <Image
                            alt=""
                            width={288}
                            src={hero4Image}
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="shrink-0">
                          <Image
                            alt=""
                            width={288}
                            src={hero10Image}
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>

                        <div className="mt-6 shrink-0 sm:mt-0">
                          <Image
                            alt=""
                            width={288}
                            src={hero7Image}
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
