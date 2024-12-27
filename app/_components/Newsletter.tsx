'use client';

import { useState } from "react";

export const Newsletter = () => {
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const onSubmitNewsletter = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSending(true);
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;

        const response = await fetch("/api/join-newsletter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setIsSent(true);
        }
        setIsSending(false);
    }

    return (
        <div className="mt-16 md:mt-16 xl:mt-0">
            <h3 className="text-sm font-medium text-gray-900">Suscríbete a nuestro boletin</h3>
            <p className="mt-6 text-sm text-gray-500">Recibe promociones, ideas de viajes y tips a tu correo.</p>
            {isSent ? (
                <p className="mt-2 text-sm text-sky-600">¡Gracias por suscribirte!</p>
            ) : (
                <form className="mt-2 flex sm:max-w-md" onSubmit={onSubmitNewsletter}>
                    <label htmlFor="email" className="sr-only">
                        Correo Electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        required
                        autoComplete="email"
                        className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-sky-500 placeholder-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                    <div className="ml-4 shrink-0">
                        <button
                            type="submit"
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            disabled={isSending}
                        >
                            Registrarse
                        </button>
                    </div>
                </form>)}
        </div>
    )
}

