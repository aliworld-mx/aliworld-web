import Link from "next/link";
import { getActivities } from "../lib/getActivities";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";

interface ActivitiesRowProps {
    header: string;
    tag: string;
    show?: number;
}

export default async function ActivitiesRow({ header, tag, show = -1 }: ActivitiesRowProps) {
    const activities = await getActivities(tag);
    const filteredActivities = show === -1 ? activities : activities.slice(0, show);

    return (
        <section className="bg-white py-20 sm:py-28" aria-labelledby="activities-heading">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-4">
                    <h3 id="activities-heading" className="text-balance text-3xl font-bold tracking-tight text-gray-900 mb-0">
                        {header}
                    </h3>
                    {show > -1 && (
                        <Link href={`/actividades/${tag}`} className="block text-sm font-semibold text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition">
                            Ver todas las actividades
                            <span aria-hidden="true"> &rarr;</span>
                        </Link>
                    )}
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredActivities.map((activity) => {
                        const { slug, nombre, imagen, klookUrl, calificacion } = activity.fields;
                        const imageUrl = `https:${imagen.fields.file?.url}`;
                        return (
                            <Link
                                href={klookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={slug}
                                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 shadow-lg group focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                                aria-label={`Ver actividad: ${nombre}`}
                            >
                                <Image alt={imagen.fields.description ?? nombre} src={imageUrl} width={640} height={360} className="absolute inset-0 -z-10 size-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent" />
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                <h4 className="mt-3 text-lg font-semibold text-white line-clamp-2">
                                    {nombre}
                                </h4>
                                <div className="mt-2 flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-x-1 items-center">
                                        <StarIcon className="text-yellow-400 h-6 w-6" aria-label="Calificación" />
                                        <span className="text-lg font-semibold text-white">{calificacion}/5</span>
                                    </div>
                                    <span className="text-white underline text-sm font-medium">Comprar Entradas</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
