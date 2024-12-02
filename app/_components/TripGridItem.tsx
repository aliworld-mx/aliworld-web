import Image from "next/image";
import { toMoney } from "../_utils/toMoney";
import Link from "next/link";

export const TripGridItem = ({ trip }) => {
    const { id, imagen, nombre, paises, precio, dias } = trip.fields;
    const { url } = imagen.fields.file;
    const imageUrl = `https:${url}`;

    return (
        <div
            key={id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white col-span-1 hover:cursor-pointer"
        >
            <Image
                alt={imagen.fields.description}
                src={imageUrl}
                width={300}
                height={300}
                className="w-full bg-gray-200 object-fit group-hover:opacity-75 sm:aspect-auto"
            />
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                    <Link href={`/experiencia/${id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {nombre}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500">{dias} Días</p>
                <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm text-gray-500">Visitando: {paises.map((pais) => pais.fields.nombre).join(", ")}</p>
                    <p className="text-base font-medium text-gray-900">Desde {toMoney(precio)}USD</p>
                </div>
            </div>
        </div>
    )
}