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
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-row justify-between">
                    <h3 className="text-balance text-2xl font-semibold tracking-tight text-gray-900 mb-0">
                        {header}
                    </h3>
                    {show > -1 && <Link href={`/actividades/${tag}`} className="text-sky-600">Ver todas</Link>}
                </div>
                <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredActivities.map((activity) => {
                        const { slug, nombre, imagen, klookUrl, calificacion } = activity.fields;
                        const imageUrl = `https:${imagen.fields.file?.url}`;

                        return (
                            <Link
                                href={klookUrl}
                                target="_blank"
                                key={slug}
                                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                            >
                                <Image alt={imagen.fields.description ?? ""} src={imageUrl} width={640} height={360} className="absolute inset-0 -z-10 size-full object-cover" />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/10" />
                                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                <h4 className="mt-3 text-lg/6 font-semibold text-white">
                                    <span className="absolute inset-0" />
                                    {nombre}
                                </h4>
                                <div className="mt-2 flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-x-1">
                                        <StarIcon className="text-white h-7" />
                                        <span className="text-2xl font-semibold text-white">{calificacion}/5</span>
                                    </div>
                                    <span className="text-white underline">Comprar Entradas</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
