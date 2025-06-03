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
        <span className="block text-md font-semibold text-gray-800">1 USD = ${dollarPrice}MXN</span>
    );
};