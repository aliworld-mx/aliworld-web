import { classNames } from "@/app/_utils/classNames";
import { CalendarDaysIcon } from "@heroicons/react/20/solid"

interface ItineraryProps {
    itinerario: string;
    active?: boolean;
}

export const Itinerary = ({ itinerario, active = true }: ItineraryProps) => {
    return (
        <div className={classNames(active ? "mx-auto mt-10 max-w-7xl pb-24 sm:pb-32" : "hidden")}>
            <section aria-labelledby="itinerary-heading">
                <h2 id="itinerary-heading" className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex flex-row items-center gap-x-3">
                    <CalendarDaysIcon className="size-8 shrink-0 text-sky-500" aria-hidden="true" />
                    Itinerario
                </h2>
                <div className='text-gray-900 mt-6'>
                    <div dangerouslySetInnerHTML={{ __html: itinerario }} />
                </div>
            </section>
        </div>
    )
}
