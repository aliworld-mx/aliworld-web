import Image from "next/image";
import { toMoney } from "../_utils/toMoney";
import Link from "next/link";
import { TypePaquete } from "../_types/contentful/Paquete";

interface TripGridItemProps {
    trip: TypePaquete;
};

export const TripGridItem = ({ trip }: TripGridItemProps) => {
    const { id, slug, imagen, nombre, paises, precio, dias, ciudades, moneda, destino, noches } = trip.fields;
    const { url } = imagen.fields.file!;
    const imageUrl = `https:${url}`;

    return (
        <div
            key={id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white col-span-1 hover:shadow-lg transition-shadow duration-200 hover:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            tabIndex={0}
            aria-label={`Paquete: ${nombre}`}
        >
            <Link href={`/paquetes/${destino.fields.id}/${slug}`} tabIndex={-1} className="block focus:outline-none">
                <Image
                    alt={imagen.fields.description ?? nombre}
                    src={imageUrl}
                    width={374}
                    height={192}
                    className="w-full h-48 object-cover bg-gray-200 group-hover:opacity-80 transition duration-200"
                    loading="lazy"
                />
            </Link>
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                    <Link href={`/paquetes/${destino.fields.id}/${slug}`} className="focus:outline-none focus:underline">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {nombre}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">{dias} Días y {noches} Noches</p>
                <div className="flex flex-1 flex-col justify-end gap-y-2">
                    <p className="text-sm text-gray-500 truncate" title={paises.map((pais) => pais.fields?.nombre).join(", ")}>Países: {paises.map((pais) => pais.fields?.nombre).join(", ")}</p>
                    <p className="text-sm text-gray-500 truncate" title={ciudades.map((ciudad) => ciudad.fields?.nombre).join(", ")}>Ciudades: {ciudades.map((ciudad) => ciudad.fields?.nombre).join(", ")}</p>
                    <p className="text-base font-bold text-sky-700">Desde {toMoney(precio)} {moneda} <span className="font-normal text-xs text-gray-800">+ Impuestos</span></p>
                </div>
            </div>
        </div>
    )
}