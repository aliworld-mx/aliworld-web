import { Metadata } from "next";
import Image from "next/image";
import actividadesImage from "../../public/actividades.jpg";
import klookAliworldLogo from "../../public/klookAli.png";
import { KlookSearchWidget } from "../_components/Klook/KlookSearchWidget";
import { KlookBenefits } from "../_components/Klook/KlookBenefits";
import ActivitiesRow from "../_components/ActivitiesRow";
import HotelQuotation from "../_components/HotelQuotation";
import { BuildingLibraryIcon, FaceSmileIcon, UserGroupIcon } from "@heroicons/react/20/solid";

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
        <div className="bg-gradient-to-br from-neutral-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="activities-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle cx="50" cy="50" r="3" fill="currentColor" className="text-purple-600" />
                                <circle cx="25" cy="25" r="2" fill="currentColor" className="text-primary-600" />
                                <circle cx="75" cy="25" r="1.5" fill="currentColor" className="text-secondary-600" />
                                <circle cx="25" cy="75" r="2.5" fill="currentColor" className="text-accent-600" />
                                <circle cx="75" cy="75" r="1" fill="currentColor" className="text-purple-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#activities-pattern)" />
                    </svg>
                </div>

                {/* Hero Image with Overlay */}
                <div className="relative h-96 lg:h-[500px]">
                    <Image
                        alt="Super Nintendo World en Osaka - Experiencias únicas de viaje"
                        src={actividadesImage}
                        width={1900}
                        height={1200}
                        className="h-full w-full object-cover"
                        priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    
                    {/* Floating Elements on Hero */}
                    <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-primary-300/30 to-secondary-300/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-accent-300/30 to-purple-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-end">
                        <div className="relative w-full px-6 lg:px-8 pb-20">
                            <div className="mx-auto max-w-4xl text-center">
                                {/* Activities Badge */}
                                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50 mb-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-primary-600 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                        </svg>
                                    </div>
                                    <span className="text-purple-700 font-semibold text-lg">Actividades & Experiencias</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                                    Vive <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">experiencias únicas</span> en cada destino
                                </h1>
                                
                                <div className="h-1 w-24 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 rounded-full mx-auto mb-6"></div>
                                
                                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                                    Desde parques temáticos hasta tours culturales, museos fascinantes y transporte único. 
                                    Descubre miles de actividades que harán de tu viaje una aventura inolvidable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative -mt-16 z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 lg:p-12">
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <FaceSmileIcon className='w-8 h-8 text-white' />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Parques Temáticos</h3>
                                <p className="text-sm text-neutral-600">Disney, Universal y más</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <UserGroupIcon className='w-8 h-8 text-white' />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Tours Guiados</h3>
                                <p className="text-sm text-neutral-600">Explora con expertos locales</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <BuildingLibraryIcon className='w-8 h-8 text-white' />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Museos & Cultura</h3>
                                <p className="text-sm text-neutral-600">Arte, historia y tradiciones</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">Transporte</h3>
                                <p className="text-sm text-neutral-600">Trenes, buses y más</p>
                            </div>
                        </div>

                        {/* Partnership Section */}
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-neutral-50 to-white rounded-2xl p-8 border border-neutral-100">
                                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                                    Aliado oficial de <span className="bg-gradient-to-r from-purple-600 to-primary-600 bg-clip-text text-transparent">Klook</span>
                                </h2>
                                <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                                    Trabajamos con Klook, la plataforma líder mundial en experiencias de viaje, 
                                    para ofrecerte acceso a más de 100,000 actividades en todo el mundo con los mejores precios garantizados.
                                </p>
                                <div className="flex justify-center">
                                    <Image
                                        alt="Klook y Aliworld - Partners oficiales en experiencias de viaje"
                                        src={klookAliworldLogo}
                                        width={400}
                                        height={100}
                                        priority={true}
                                        className="h-20 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Sections */}
            <section className="py-12">
                <ActivitiesRow header="Maravíllate con los Parques de Disney" tag='disney' show={3} />
                <ActivitiesRow header="Vive aventuras sorprendentes en México" tag='mexico' show={3} />
                <ActivitiesRow header="Descubre todo lo que Japón tiene para ti" tag='japon' show={3} />
                <ActivitiesRow header="Actividades únicas en Ámsterdam" tag='amsterdam' show={3} />
            </section>

            {/* Search Widget Section */}
            <section className="py-24 sm:py-32 bg-gradient-to-br from-white to-neutral-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900 mb-6">
                            Busca tu <span className="bg-gradient-to-r from-purple-600 to-primary-600 bg-clip-text text-transparent">actividad perfecta</span>
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Utiliza nuestro buscador especializado para encontrar exactamente lo que buscas
                        </p>
                    </div>
                    
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
                        <KlookSearchWidget />
                    </div>
                </div>
            </section>

            <KlookBenefits />
            <HotelQuotation />
        </div>
    )
}
