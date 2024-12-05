import Link from 'next/link'
import Image from 'next/image';
import heroImage from '../public/hero.jpg';
import promoImage from '../public/promo.jpg';
import { PercentBadgeIcon } from '@heroicons/react/20/solid';
import Benefits from './_components/Benefits';
import { WithContext, TravelAgency } from 'schema-dts';
import { getMetadata } from './lib/getMetadata';
import { TypePaquete } from './_types/contentful/Paquete';
import { Metadata } from 'next';
import { getFavorites } from './lib/getFavorites';
import { toMoney } from './_utils/toMoney';
import { getDestinations } from './lib/getDestinations';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Aliworld - Paquetes de viaje a todo el mundo al mejor precio',
  description: 'Descubre los mejores destinos y vive una gran aventura con Aliworld.',
  openGraph: {
    type: 'website',
    url: 'https://www.aliworld.mx',
    title: "Aliworld - Paquetes de viaje a todo el mundo al mejor precio",
    siteName: 'Aliworld',
    description: "Encuentra los mejores paquetes de viaje a todo el mundo al mejor precio. ¡Reserva ya!",
  },
  alternates: {
    canonical: 'https://www.aliworld.mx',
  },
  generator: 'Next.js',
  keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
  robots: 'index, follow',
}

export default async function InicioPage() {
  const metadataInfo = await getMetadata('5KAGiplsyhBFj5JOtEe5eC');
  const favorites = await getFavorites();
  const destinations = await getDestinations();

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
    sameAs: [
      'https://www.facebook.com/aliworld.viajes/',
      'https://www.instagram.com/aliworld.viajes/',
      'https://www.tiktok.com/@aliworld.viajes',
      'https://www.threads.net/@aliworld.viajes'
    ],
    email: 'contacto@aliworld.mx',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rinconada Del Camichin',
      addressLocality: 'Zapopan',
      addressRegion: 'Jalisco',
      postalCode: '45130',
      addressCountry: 'MX',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'MX',
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
            itinerary: {
              '@type': 'ItemList',
              itemListElement: paquete.fields?.ciudades.map((ciudad, index) => ({
                '@type': 'Trip',
                position: index + 1,
                item: {
                  '@type': 'Place',
                  name: ciudad.fields?.nombre,
                },
              })),
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Decorative image and overlay */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          alt="El Pabellon Dorado en Kyoto, Japón"
          src={heroImage}
          width={1920}
          height={1080}
          className="size-full object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 my-32 text-center sm:my-64 lg:px-0">
        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">Encuentra tu próximo destino</h1>
        <p className="mt-4 text-xl text-white">
          Viajar es una de las mejores experiencias que puedes tener, descubre los mejores destinos y vive una gran aventura.
        </p>
        <Link
          href="paquetes"
          className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
        >
          Ver Destinos
        </Link>
      </div>

      <main className='bg-white'>
        {/* Category section */}
        <section aria-labelledby="category-heading" className="py-32 sm:py-48 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Buscar por Destino
            </h2>
            <Link href="/paquetes" className="hidden text-sm font-semibold text-sky-600 hover:text-sky-500 sm:block">
              Ver todos los destinos
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {destinations?.slice(0, 5).map((destination) => (
                    <Link
                      key={destination.fields.nombre}
                      href={`/paquetes/${destination.fields.id}`}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <Image width={220} height={320} alt={destination?.fields?.imagen?.fields?.description ?? "Destino"} src={`https://${destination?.fields.imagen?.fields?.file?.url}`} className="size-full object-cover" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">{destination.fields.nombre}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-sky-600 hover:text-sky-500">
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>
        <Benefits />
        {/* Favorites section */}
        <section aria-labelledby="favorites-heading" className='bg-white'>
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
              {favorites?.fields?.paquetes?.slice(0, 3).map((favorite) => (
                <div key={favorite.fields?.id} className="group relative">
                  <Image
                    alt={favorite.fields?.imagen?.fields?.description ?? favorite.fields?.nombre}
                    src={`https://${favorite.fields?.imagen?.fields?.file?.url}`}
                    width={300}
                    height={300}
                    className="w-full rounded-lg object-fit group-hover:opacity-75"
                  />
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    <Link href={`/experiencia/${favorite.fields?.id}`}>
                      <span className="absolute inset-0" />
                      {favorite.fields?.nombre}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Desde: {toMoney(favorite?.fields?.precio)} {favorite?.fields?.moneda} + Impuestos y Suplementos</p>
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
        <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt="Paisaje en Brujas, Bélgica"
              src={promoImage}
              width={1920}
              height={1080}
              className="size-full object-cover"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gray-900/60" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <PercentBadgeIcon className="h-12 w-12 text-white" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Promociones</h2>
            <p className="mt-3 text-xl text-white">
              Viajar es una de las mejores experiencias que puedes tener, descubre los mejores destinos y vive una gran aventura. Visita nuestra sección de promociones y encuentra el viaje de tus sueños al mejor precio.
            </p>
            <Link href="/promociones"
              className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              Ver todas las promociones
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
