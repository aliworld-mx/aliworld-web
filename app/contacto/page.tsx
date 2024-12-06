import { EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import FacebookIcon from '../../public/icons/facebook.svg';
import WhatsAppIcon from '../../public/icons/whatsapp.svg';
import Benefits from '../_components/Benefits';
import { FAQs } from '../_components/FAQs';
import { ContactPage, WithContext } from 'schema-dts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacto | Aliworld',
    description: '¿Tienes dudas? ¿Quieres que un ejecutivo te ayude a decidir la mejor experiencia para ti? Contactanos.',
    openGraph: {
        type: 'website',
        url: 'https://www.aliworld.mx/contacto',
        title: 'Contacto | Aliworld',
        siteName: 'Aliworld',
        description: '¿Tienes dudas? ¿Quieres que un ejecutivo te ayude a decidir la mejor experiencia para ti? Contactanos.',
    },
    alternates: {
        canonical: 'https://www.aliworld.mx/contacto',
    },
    generator: 'Next.js',
    keywords: ['viajes', 'paquetes', 'cruceros', 'hoteles', 'reservaciones', 'aliworld'],
    robots: 'index, follow',
};

export default function ContactoPage() {
    const structuredData: WithContext<ContactPage> = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contacto",
        url: "https://www.aliworld.mx/contacto",
        mainEntity: {
            "@type": "ContactPoint",
            telephone: "+52 33 1433 1600",
            contactType: "customer service",
            areaServed: "MX",
            availableLanguage: "Spanish"
        },
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contactanos</h2>
                    <p className="mt-2 text-lg/8 text-gray-600">¿Tienes dudas? ¿Quieres que un ejecutivo te ayude a decidir la mejor experiencia para ti?</p>
                </div>
                <div className="mx-auto mt-20 max-w-lg space-y-16">
                    <div className="flex gap-x-6">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-600">
                            <Image src={WhatsAppIcon} aria-hidden="true" className="size-6 text-white" alt="WhatsApp" width={24} height={24} />
                        </div>
                        <div>
                            <h3 className="text-base/7 font-semibold text-gray-900">WhatsApp</h3>
                            <p className="mt-2 text-base/7 text-gray-600">
                                Estamos para atenderte via WhatsApp de lunes a viernes de 9:00 a 18:00. Envíanos un mensaje y te responderemos lo antes posible.
                            </p>
                            <p className="mt-4 text-sm/6 font-semibold">
                                <Link target='_blank' href="https://wa.me/523314331600?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Aliworld" className="text-sky-600">
                                    Enviar Mensaje <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-600">
                            <Image src={FacebookIcon} aria-hidden="true" className="size-6 text-white" alt="Facebook" width={24} height={24} />
                        </div>
                        <div>
                            <h3 className="text-base/7 font-semibold text-gray-900">Facebook</h3>
                            <p className="mt-2 text-base/7 text-gray-600">
                                ¿Necesitas ayuda con tu reserva? Escríbenos en Facebook y te ayudaremos a resolver tus dudas.
                            </p>
                            <p className="mt-4 text-sm/6 font-semibold">
                                <Link href='https://www.facebook.com/aliworld.viajes' target='_blank' className="text-sky-600">
                                    Visitar perfil <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-600">
                            <EnvelopeIcon aria-hidden="true" className="size-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-base/7 font-semibold text-gray-900">Correo Electrónico</h3>
                            <p className="mt-2 text-base/7 text-gray-600">
                                Envíanos un correo con tus dudas o comentarios y te responderemos lo antes posible.
                            </p>
                            <p className="mt-4 text-sm/6 font-semibold">
                                <Link href="mailto:contacto@aliworld.mx" className="text-sky-600">
                                    Enviar correo <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Benefits />
            <FAQs />
        </>
    )
}
