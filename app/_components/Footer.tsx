import Link from "next/link"
import { Newsletter } from "./Newsletter";

const footerNavigation = {
    destinos: [
        { name: 'Europa', href: '/paquetes/europa' },
        { name: 'Asia', href: '/paquetes/asia' },
        { name: 'Caribe', href: '/paquetes/caribe' },
        { name: 'África', href: '/paquetes/africa' },
        { name: 'México', href: '/paquetes/mexico' },
        { name: 'Sudamérica', href: '/paquetes/sudamerica' },
        { name: 'Centroamérica', href: '/paquetes/centroamerica' },
        { name: 'Medio Oriente', href: '/paquetes/medio-oriente' },
        { name: 'Estados Unidos', href: '/paquetes/estados-unidos' },
        { name: 'Canadá', href: '/paquetes/canada' },
        { name: 'Pacífico', href: '/paquetes/pacifico' },
        { name: 'Cruceros', href: '/paquetes/cruceros' },
    ],
    reservaciones: [
        { name: 'Hoteles', href: '/hoteles' },
        { name: 'Actividades', href: '/actividades' },
        { name: 'Vuelos', href: '/vuelos' },
        { name: 'Blog', href: '/blog' },
    ],
    empresa: [
        { name: 'Politica de Cancelaciones', href: '#' },
        { name: 'Terminos y Condiciones', href: '#' },
        { name: 'Politica de Privacidad', href: '#' },
    ],
    sociales: [
        { name: 'WhatsApp', href: 'https://wa.me/523325371347?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Aliworld' },
        { name: 'Facebook', href: 'https://www.facebook.com/aliworld.viajes/' },
        { name: 'Instagram', href: 'https://www.instagram.com/aliworld.viajes/' },
        { name: 'TikTok', href: 'https://www.tiktok.com/@aliworld.viajes' },
        { name: 'YouTube', href: 'https://www.youtube.com/@aliworld.viajes' },
    ],
}

export const Footer = () => (
    <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">
            Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                    <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                        <div className="md:col-span-2">
                            <h3 className="text-sm font-medium text-gray-900 underline decoration-sky-600">Destinos</h3>
                            <ul role="list" className="mt-6 flex flex-wrap">
                                {footerNavigation.destinos.map((item) => (
                                    <li key={item.name} className="text-sm w-full md:w-1/2 mb-6 list-none">
                                        <Link href={item.href} className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 underline decoration-sky-600">Sociales</h3>
                            <ul role="list" className="mt-6 space-y-6">
                                {footerNavigation.sociales.map((item) => (
                                    <li key={item.name} className="text-sm list-none">
                                        <Link href={item.href} target="_blank" className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 underline decoration-sky-600">Reservaciones</h3>
                            <ul role="list" className="mt-6 space-y-6">
                                {footerNavigation.reservaciones.map((item) => (
                                    <li key={item.name} className="text-sm list-none">
                                        <Link href={item.href} target="_blank" className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </div>

            <div className="border-t border-gray-200 py-10">
                <p className="text-sm text-gray-500">2025 Aliworld</p>
            </div>
        </div>
    </footer>
)