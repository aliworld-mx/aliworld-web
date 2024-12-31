import { classNames } from "@/app/_utils/classNames";
import { GlobeAmericasIcon } from "@heroicons/react/20/solid";

interface VisaProps {
    visas: string;
    active?: boolean;
}

export const Visa = ({ visas, active = true }: VisaProps) => {
    if (!visas || visas === 'Visas no disponible') return null;

    return (
        <div className={classNames(active ? "mx-auto mt-10 max-w-7xl pb-24 sm:pb-32 space-y-12" : "hidden")}>
            <section aria-labelledby="visa-heading">
                <h2 id="visa-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <GlobeAmericasIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    Información de Visas
                </h2>
            </section>
            <div dangerouslySetInnerHTML={{ __html: visas }} />
        </div>
    )
}
