import { classNames } from "@/app/_utils/classNames";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

interface NotesProps {
    notas: string;
    active?: boolean;
}

export const Notes = ({ notas, active = true }: NotesProps) => {
    if (!notas || notas === 'Notas no disponible') return null;

    return (
        <div className={classNames(active ? "mx-auto mt-10 max-w-7xl pb-24 sm:pb-32 space-y-12 text-gray-900" : "hidden")}>
            <section aria-labelledby="notes-heading">
                <h2 id="notes-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <ExclamationTriangleIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    Notas
                </h2>
            </section>
            <div dangerouslySetInnerHTML={{ __html: notas }} />
        </div>
    )
}
