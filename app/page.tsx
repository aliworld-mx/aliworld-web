import Link from 'next/link'
import Image from 'next/image';
import heroImage from '../public/hero.jpg';
import promoImage from '../public/promo.jpg';
import { ArrowRightIcon, ChatBubbleBottomCenterIcon, GlobeAmericasIcon, PercentBadgeIcon } from '@heroicons/react/20/solid';
import Benefits from './_components/Benefits';
import { WithContext, TravelAgency } from 'schema-dts';
import { getMetadata } from './lib/getMetadata';
import { TypePaquete } from './_types/contentful/Paquete';
import { Metadata } from 'next';
import { getFavorites } from './lib/getFavorites';
import { getDestinations } from './lib/getDestinations';
import { FAQs } from './_components/FAQs';
import Socials from './_components/Socials';
import { Catalog } from './_components/Catalog';
import { ExpediaBenefits } from './_components/Expedia/ExpediaBenefits';
import { TripGridItem } from './_components/TripGridItem';
import DestinationsCarousel from './_components/DestinationsCarousel';

export const revalidate = 36000;

export const metadata: Metadata = {
  title: 'Aliworld - Paquetes de viaje, hoteles y vuelos al mejor precio',
  description: 'Reserva ya paquetes de viaje, hoteles y vuelos a todo el mundo al mejor precio. ¡Vive la mejor experiencia con Aliworld!',
  openGraph: {
    type: 'website',
    url: 'https://www.aliworld.mx',
    title: "Aliworld - Paquetes de viaje, hoteles y vuelos al mejor precio",
    siteName: 'Aliworld',
    description: 'Reserva ya paquetes de viaje, hoteles y vuelos a todo el mundo al mejor precio. ¡Vive la mejor experiencia con Aliworld!',
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
      'https://www.youtube.com/@aliworld.viajes'
    ],
    email: 'contacto@aliworld.mx',
    address: {
      '@type': 'PostalAddress',
      postalCode: '44130',
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
            url: `https://www.aliworld.mx/paquetes/${paquete.fields?.destino.fields.id}/${paquete.fields?.slug}`,
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
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://www.aliworld.mx/paquetes/${paquete.fields?.destino.fields.id}/${paquete.fields?.slug}`,
              },
              url: `https://www.aliworld.mx/paquetes/${paquete.fields?.destino.fields.id}/${paquete.fields?.slug}`,
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
      {/* Hero Section with Image Focus */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            alt="El Pabellon Dorado en Kyoto, Japón"
            src={heroImage}
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 mb-8 animate-bounce">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="font-semibold text-sm text-white">Más de 10,000 viajeros felices</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-tight">
                Descubre
                <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                  el mundo
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">con Aliworld</span>
              </h1>

              {/* Description */}
              <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
                Vive experiencias únicas y descubre destinos increíbles. Desde parques temáticos hasta aventuras culturales, tu próximo viaje te está esperando.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-12">
                {[
                  { icon: '🎯', text: 'Mejor precio garantizado' },
                  { icon: '🌟', text: 'Experiencias únicas' },
                  { icon: '🔒', text: 'Pago 100% seguro' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/paquetes"
                  className="group relative bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <GlobeAmericasIcon className="w-5 h-5" />
                    Explorar Paquetes
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-2 text-white hover:text-primary-300 font-semibold transition-colors duration-200 py-4 px-8 border-2 border-white/30 rounded-2xl hover:border-primary-300 hover:bg-white/10 backdrop-blur-sm"
                >
                  <ChatBubbleBottomCenterIcon className="w-5 h-5" />
                  Hablar con un experto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main id="main-content" className='bg-white'>
        <DestinationsCarousel destinations={destinations} />
        <section aria-labelledby="favorites-heading" role="region" className='bg-gradient-to-br from-white via-accent-50/30 to-secondary-50/30 py-24 sm:py-32 relative overflow-hidden'>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.01]">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="favorites-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="currentColor" className="text-accent-600" />
                  <circle cx="25" cy="25" r="1.5" fill="currentColor" className="text-secondary-600" />
                  <circle cx="75" cy="25" r="1" fill="currentColor" className="text-primary-600" />
                  <circle cx="25" cy="75" r="1.5" fill="currentColor" className="text-accent-500" />
                  <circle cx="75" cy="75" r="0.5" fill="currentColor" className="text-secondary-500" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#favorites-pattern)" />
            </svg>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between mb-16">
              <div className="flex items-center gap-4">
                {/* Heart Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-accent-500/30 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary-200">
                  <div className="w-6 h-6 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-sm text-secondary-700">Favoritos</span>
                </div>
                
                <h2 id="favorites-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
                  Nuestros favoritos
                </h2>
              </div>
              
              <Link href="/favoritos" className="hidden text-sm font-semibold group text-secondary-600 hover:text-secondary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 transition sm:block">
                Ver todos los favoritos
                <ArrowRightIcon className="h-4 w-4 ml-2 inline-block transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8" role="list" aria-label="Paquetes favoritos">
              {favorites?.fields?.paquetes?.slice(0, 3).map((favorite) => (
                <TripGridItem trip={favorite} key={favorite.fields.slug} /> 
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/favoritos" className="block text-sm font-semibold group text-sky-600 hover:text-sky-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition">
                Ver todos los favoritos
                <ArrowRightIcon className="h-4 w-4 ml-2 inline-block transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="promo-heading" role="region" className="relative bg-neutral-900 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt="Paisaje en Brujas, Bélgica"
              src={promoImage}
              width={1920}
              height={1080}
              className="size-full object-cover"
              priority
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/70 to-neutral-900/50" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 opacity-20 animate-float">
            <div className="w-32 h-32 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-full blur-xl"></div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 animate-float-delayed">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Animated Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-full mb-8 animate-pulse shadow-2xl shadow-secondary-500/50">
              <PercentBadgeIcon className="h-10 w-10 text-white" />
            </div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30 mb-8">
              <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-sm">Ofertas limitadas</span>
            </div>
            
            <h2 id="promo-heading" className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
              <span className="bg-gradient-to-r from-secondary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                Promociones
              </span>
              <br />especiales
            </h2>
            
            <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-3xl leading-relaxed">
              No hay nada mejor que conocer la ciudad de tus sueños, y que mejor que con un descuento. Visita nuestra sección de promociones y encuentra el viaje de tus sueños al mejor precio.
            </p>
            
            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { icon: '💰', text: 'Hasta 50% OFF' },
                { icon: '⏰', text: 'Tiempo limitado' },
                { icon: '🎁', text: 'Beneficios extras' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link href="/promociones"
                className="group relative bg-gradient-to-r from-secondary-600 to-accent-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-secondary-500/50 transition-all duration-300 transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Ver todas las promociones
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link href="/contacto"
                className="group inline-flex items-center gap-2 text-white hover:text-secondary-300 font-semibold transition-colors duration-200 py-4 px-6"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Consultar disponibilidad
              </Link>
            </div>
          </div>
        </section>
        <Catalog />
        <ExpediaBenefits />
        <Socials />
        <Benefits />
        <FAQs />
      </main>
    </>
  )
}
