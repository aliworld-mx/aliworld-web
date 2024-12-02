import Link from "next/link"

export const Newsletter = () => {
    return (
        <div className="bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    ¿Quieres recibir ofertas a tu correo? Suscribete al boletin.
                </h2>
                <form className="mt-10 max-w-md">
                    <div className="flex gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Correo Eléctronico
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Ingresa tu correo"
                            autoComplete="email"
                            className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6"
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                        >
                            Suscribirse
                        </button>
                    </div>
                    <p className="mt-4 text-sm/6 text-gray-900">
                        Nos preocupamos por tus datos personales. Lee nuestra{' '}
                        <Link href="/privacidad" className="font-semibold text-sky-600 hover:text-sky-500">
                            politica&nbsp;de&nbsp;privacidad
                        </Link>
                        .
                    </p>
                </form>
            </div>
        </div>
    )
}
