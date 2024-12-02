interface ItineraryProps {
    itinerario: string;
}

export const Itinerary = ({ itinerario }: ItineraryProps) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: itinerario }} />
    )
}
