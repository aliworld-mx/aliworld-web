import { classNames } from "@/app/_utils/classNames";
import { CameraIcon } from "@heroicons/react/20/solid";

interface OptionalToursProps {
    tours: string;
    active?: boolean;
}

export const OptionalTours = ({ tours, active = true }: OptionalToursProps) => {
    if (!tours || tours === 'Tours no disponible') return null;

    return (
        <div className={classNames(active ? "mx-auto mt-10 max-w-7xl pb-24 sm:pb-32 space-y-12 text-gray-900" : "hidden")}>
            <section aria-labelledby="tours-heading">
                <h2 id="tours-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <CameraIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    Tours Opcionales
                </h2>
            </section>
            <div dangerouslySetInnerHTML={{ __html: tours }} />
        </div>
    )
}
