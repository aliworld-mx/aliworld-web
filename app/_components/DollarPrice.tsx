import Image from "next/image";
import { useState, useEffect } from "react";

export const DollarPrice = () => {
    const [dollarPrice, setDollarPrice] = useState<string>('');

    useEffect(() => {
        const fetchDollarPrice = async () => {
            const response = await fetch('https://q.megatravel.com.mx/developers/tc/now');
            const data = await response.json();
            setDollarPrice(data);
        };

        fetchDollarPrice();
    }, []);

    if (!dollarPrice) return null;

    return (
        <>
            <Image
                width={20}
                height={20}
                alt="Bandera de Estados Unidos"
                src="https://tailwindui.com/plus/img/flags/flag-united-states.svg"
                className="block h-auto w-5 shrink-0"
            />
            <span className="ml-3 block text-sm font-medium text-gray-800">1 USD = ${dollarPrice}MXN</span>
        </>
    );
};