import { classNames } from "@/app/_utils/classNames";

interface HotelsProps {
    hoteles: string;
    active?: boolean;
}

export const Hotels = ({ hoteles, active = true }: HotelsProps) => {
    if (!hoteles || hoteles === 'Hoteles no disponible') return null;

    return (
        <div className={classNames(active ? "mx-auto max-w-7xl pb-24 sm:pb-32" : "hidden")}>
            <div dangerouslySetInnerHTML={{ __html: hoteles }} />
        </div>
    )
}
