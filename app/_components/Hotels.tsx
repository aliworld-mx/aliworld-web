interface HotelsProps {
    hoteles: string;
}

export const Hotels = ({ hoteles }: HotelsProps) => {
    if (!hoteles || hoteles === 'Hoteles no disponible') return null;

    return (
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                <div dangerouslySetInnerHTML={{ __html: hoteles }} />
            </div>
        </div>
    )
}
