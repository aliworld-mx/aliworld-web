

import { CheckIcon, CurrencyDollarIcon, ExclamationTriangleIcon, XMarkIcon } from "@heroicons/react/20/solid";
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
                <div className="text-gray-900 [&_ul]:px-5 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: precios }} />
            </section>
            <section aria-labelledby="include-heading">
                <h2 id="include-heading" className="text-2xl font-bold mb-6 tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <CheckIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    El Viaje Incluye
                </h2>
                <div className="text-gray-900 [&_ul]:px-5 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: incluye }} />
            </section>
            <section aria-labelledby="not-include-heading">
                <h2 id="not-include-heading" className="text-2xl font-bold mb-6 tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <XMarkIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    El Viaje No Incluye
                </h2>
                <div className="text-gray-900 [&_ul]:px-5 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: noIncluye }} />
            </section>
            <section aria-labelledby="disclaimer-heading">
                <h2 id="disclaimer-heading" className="text-2xl font-bold mb-6 tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <ExclamationTriangleIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    IMPORTANTE
                </h2>
                <p className="text-gray-800">TODOS LOS PRECIOS PUBLICADOS EN ESTE SITIO WEB SON DE CARÁCTER REFERENCIAL E INFORMATIVO. NINGUNO DE LOS PRECIOS QUE SE PUBLICAN SON DE CARACTER FINAL O DEFINITIVO EN TANTO EL CLIENTE NO SOLICITE UNA COTIZACION FORMAL MISMA QUE SE ELABORA Y ENTREGA DE ACUERDO A SUS PROPIOS INTERESES, REQUERIMIENTOS Y PRESUPUESTO. Los precios son referenciales e informativos dado que se sujetan a requerimientos específicos del cliente como son entre otros, sin ser limitativos: clase de vuelos; categoría de hoteles; clase de ocupación sencilla, doble triple, etc edades de los clientes; condiciones especiales que ameriten contratación de servicios especiales o particulares; temporalidad en la que se viaja y otro sin número de condiciones, características y particularidades que le son muy propias de cada uno de nuestros clientes. Toda cotización se elabora en base a estas condiciones y una vez que el cliente cuenta con ella es de nuestra la responsabilidad y obligación de dar cabal cumplimiento al precio y a los servicios que se contratan. Toda cotización se sujeta a su debido contrato, mismo que se anexa a la cotización misma. Toda la información de la cotización en su conjunto determina la libre decisión por parte de el cliente para cotntratar en dichos términos. Toda la información que se entrega al cliente cumple y se sujeta invariablemente a la normatividad vigente como son entre otras Ley Federal del Consumidor, Norma Oficial Mexicana NOM-010-TUR-2001 Del mismo modo, las obligaciones de pago en moneda extranjera contraídas dentro de la República Mexicana para ser cumplidas en esta se deben solventar en Moneda Nacional al tipo de cambio que rija al momento de efectuarse el pago, o en la moneda extranjera a elección de ambas partes, lo anterior con fundamento en los apartados 5.1.3 y 6.2.4 de la Norma Oficial Mexicana NOM-010-TUR-2001. Toda la información referente a las formas de contratación, uso y manejo de precios en moneda extranjera, forman parte de nuestro contrato de adhesión en términos y aplicación de la normatividad vigente. Para todos los casos el contrato de adhesión forma parte integral de toda cotización y en general de las documentales de viaje que reciben los usuarios-turistas.</p>
                {moneda === 'USD' && <PriceDisclaimer />}
            </section>
        </div>
    )
}
