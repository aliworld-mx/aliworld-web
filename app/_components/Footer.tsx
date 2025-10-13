import Link from "next/link"
import { JSX, SVGProps } from "react";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import AliworldLogo from '../../public/aliworld-color.svg';

const footerNavigation = {
    destinos: [
        { name: 'Europa', href: '/paquetes/europa' },
        { name: 'Asia', href: '/paquetes/asia' },
        { name: 'México', href: '/paquetes/mexico' },
        { name: 'Sudamérica', href: '/paquetes/sudamerica' },
        { name: 'Centroamérica', href: '/paquetes/centroamerica' },
        { name: 'Medio Oriente', href: '/paquetes/medio-oriente' },
        { name: 'Estados Unidos', href: '/paquetes/estados-unidos' },
        { name: 'Canadá', href: '/paquetes/canada' },
        { name: 'Pacífico', href: '/paquetes/pacifico' },
        { name: 'Cruceros', href: '/paquetes/cruceros' },
    ],
    servicios: [
        { name: 'Hoteles', href: '/hoteles', },
        { name: 'Vuelos', href: '/vuelos', },
        { name: 'Actividades', href: '/actividades' },
        { name: 'Paquetes de Viaje', href: '/paquetes' },
        { name: 'Promociones', href: '/promociones' },
    ],
    empresa: [
        { name: 'Blog de Viajes', href: '/blog' },
        { name: 'Guías de Ciudades', href: '/ciudades' },
        { name: 'Contacto', href: '/contacto' },
    ],
    sociales: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/aliworld.viajes/',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/aliworld.viajes/',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: 'https://www.youtube.com/@aliworld.viajes',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'TikTok',
            href: 'https://www.tiktok.com/@aliworld.viajes',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 50 50" {...props}>
                    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg>
            ),
        },
    ],
}

export const Footer = () => (
    <footer aria-labelledby="footer-heading" className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white overflow-hidden">
        <h2 id="footer-heading" className="sr-only">
            Información del sitio
        </h2>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="footer-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                        <circle cx="60" cy="60" r="4" fill="currentColor" className="text-primary-400" />
                        <circle cx="30" cy="30" r="3" fill="currentColor" className="text-secondary-400" />
                        <circle cx="90" cy="30" r="2.5" fill="currentColor" className="text-accent-400" />
                        <circle cx="30" cy="90" r="3.5" fill="currentColor" className="text-purple-400" />
                        <circle cx="90" cy="90" r="2" fill="currentColor" className="text-primary-300" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#footer-pattern)" />
            </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-accent-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6 bg-white mx-auto backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10 w-max">
                                <Image
                                    alt="Logo de Aliworld"
                                    src={AliworldLogo}
                                    width={224}
                                    height={112}
                                    className="h-20 sm:h-24 w-auto transition-transform duration-300"
                                />
                            </div>
                            <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                                Tu agencia de viajes de confianza. Descubre el mundo con nuestros paquetes de viaje premium,
                                hoteles exclusivos y experiencias únicas que transformarán tus vacaciones en recuerdos inolvidables.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary-400/50 transition-colors duration-300">
                                    <PhoneIcon className="h-5 w-5 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                                </div>
                                <a
                                    href="https://wa.me/+523314331600"
                                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 font-medium group-hover:text-primary-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +52 33 1433 1600
                                </a>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary-400/50 transition-colors duration-300">
                                    <EnvelopeIcon className="h-5 w-5 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                                </div>
                                <a
                                    href="mailto:contacto@aliworld.mx"
                                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 font-medium group-hover:text-primary-300"
                                >
                                    contacto@aliworld.mx
                                </a>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4 pt-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-neutral-300">Disponible 24/7</span>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium text-neutral-300">Mejor precio garantizado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                            {/* Destinos */}
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        Destinos Populares
                                    </h3>
                                </div>
                                <ul role="list" className="space-y-3">
                                    {footerNavigation.destinos.slice(0, 8).map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-500/50 rounded px-2 py-1 -mx-2 hover:bg-white/5"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="pt-2">
                                        <Link
                                            href="/paquetes"
                                            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-semibold group"
                                        >
                                            <span>Ver todos los destinos</span>
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Servicios */}
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        Nuestros Servicios
                                    </h3>
                                </div>
                                <ul role="list" className="space-y-3">
                                    {footerNavigation.servicios.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-neutral-300 hover:text-secondary-400 transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-secondary-500/50 rounded px-2 py-1 -mx-2 hover:bg-white/5"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Información */}
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        Información
                                    </h3>
                                </div>
                                <ul role="list" className="space-y-3">
                                    {footerNavigation.empresa.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-neutral-300 hover:text-accent-400 transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-500/50 rounded px-2 py-1 -mx-2 hover:bg-white/5"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/10 py-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="mb-6 lg:mb-0">
                        <p className="text-sm text-neutral-400">
                            © 2025 Aliworld. Todos los derechos reservados.
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">
                            Hecho con ❤️ para viajeros apasionados
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-sm text-neutral-400 hidden sm:block">Síguenos:</span>
                        <div className="flex gap-3">
                            {footerNavigation.sociales.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group relative w-10 h-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary-400/50 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Síguenos en ${item.name} (se abre en nueva pestaña)`}
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden="true" className="h-5 w-5 text-neutral-400 group-hover:text-primary-400 transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)