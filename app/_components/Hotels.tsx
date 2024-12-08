"use client";
import { ExpediaWidget } from "expedia-search-widget";

interface HotelsProps {
    hoteles: string;
}

export const Hotels = ({ hoteles }: HotelsProps) => {
    if (!hoteles) return null;

    return (
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                <ExpediaWidget widget="search" program="mx-expedia" lobs="stays,flights" network="pz" camref="1101l4c3IY" />
                <div dangerouslySetInnerHTML={{ __html: hoteles }} />
            </div>
        </div>
    )
}
