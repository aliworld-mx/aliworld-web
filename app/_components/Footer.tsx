import Link from "next/link"

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
    empresa: [
        { name: 'Politica de Devoluciones', href: '#' },
        { name: 'Terminos y Condiciones', href: '#' },
        { name: 'Politica de Privacidad', href: '#' },
    ],
    sociales: [
        { name: 'Contactanos', href: '/contacto' },
        { name: 'WhatsApp', href: '#' },
        { name: 'Facebook', href: 'https://www.facebook.com/aliworld.viajes/' },
        { name: 'Instagram', href: 'https://www.instagram.com/aliworld.viajes/' },
        { name: 'TikTok', href: 'https://www.tiktok.com/@aliworld.viajes' },
        { name: 'Threads', href: 'https://www.threads.net/@aliworld.viajes' },
        { name: 'Youtube', href: '#' },
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
                                    <li key={item.name} className="text-sm w-full md:w-1/2 mb-6">
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
                                    <li key={item.name} className="text-sm">
                                        <Link href={item.href} target="_blank" className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 underline decoration-sky-600">Empresa</h3>
                            <ul role="list" className="mt-6 space-y-6">
                                {footerNavigation.empresa.map((item) => (
                                    <li key={item.name} className="text-sm">
                                        <Link href={item.href} target="_blank" className="text-gray-500 hover:text-gray-600">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 md:mt-16 xl:mt-0">
                    <h3 className="text-sm font-medium text-gray-900">Suscribete a nuestro boletin</h3>
                    <p className="mt-6 text-sm text-gray-500">Recibe promociones, ideas de viajes y tips a tu correo.</p>
                    <form className="mt-2 flex sm:max-w-md">
                        <label htmlFor="email-address" className="sr-only">
                            Correo Electronico
                        </label>
                        <input
                            id="email-address"
                            type="text"
                            required
                            autoComplete="email"
                            className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-sky-500 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                        <div className="ml-4 shrink-0">
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-200 py-10">
                <p className="text-sm text-gray-500">2024 Aliworld</p>
            </div>
        </div>
    </footer>
)