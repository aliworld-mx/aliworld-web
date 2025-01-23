'use client'

interface QuotationButtonProps {
    destination: string
    slug: string
}

export const QuotationButton = ({ destination, slug }: QuotationButtonProps) => {
    const onClick = async (e: any) => {
        e.preventDefault()

        const reservationData = `Hola! Quiero una cotizacion para el siguiente paquete: https://www.aliworld.mx/paquetes/${destination}/${slug}`;

        window.open(`https://wa.me/523314331600?text=${encodeURIComponent(reservationData)}`, '_blank')
    };

    return (
        <button
            onClick={onClick}
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-8 py-3 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
            Cotizar
        </button>
    )
}
