import { classNames } from "@/app/_utils/classNames";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";

interface HotelsProps {
    hoteles: string;
    active?: boolean;
}

export const Hotels = ({ hoteles, active = true }: HotelsProps) => {
    if (!hoteles || hoteles === 'Hoteles no disponible') return null;

    return (
        <div className={classNames(active ? "mx-auto mt-10 max-w-7xl pb-24 sm:pb-32 space-y-12 text-gray-900" : "hidden")}>
            <section aria-labelledby="hotels-heading">
                <h2 id="hotels-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <BuildingOfficeIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    Hoteles
                </h2>
            </section>
            <div dangerouslySetInnerHTML={{ __html: hoteles }} />
        </div>
    )
}
