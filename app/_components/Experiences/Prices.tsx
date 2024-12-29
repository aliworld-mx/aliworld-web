

import { CheckIcon, CurrencyDollarIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { PriceDisclaimer } from "../PriceDisclaimer";
import { classNames } from "@/app/_utils/classNames";

interface PricesProps {
    precios: string;
    moneda: string;
    incluye: string;
    noIncluye: string;
    active?: boolean;
}

export const Prices = ({ precios, moneda, incluye, noIncluye, active = true }: PricesProps) => {
    return (
        <div className={classNames(active ? "mx-auto mt-10 max-w-7xl pb-24 sm:pb-32 space-y-12" : "hidden")}>
            <section aria-labelledby="tariff-heading">
                <h2 id="tariff-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <CurrencyDollarIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    Tarifas
                </h2>
                <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: precios }} />
                {moneda === 'USD' && <PriceDisclaimer />}
            </section>
            <section aria-labelledby="include-heading">
                <h2 id="include-heading" className="text-2xl font-bold mb-6 tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <CheckIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    Incluye
                </h2>
                <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: incluye }} />
            </section>
            <section aria-labelledby="not-include-heading">
                <h2 id="not-include-heading" className="text-2xl font-bold mb-6 tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <XMarkIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    No Incluye
                </h2>
                <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: noIncluye }} />
            </section>
        </div>
    )
}
