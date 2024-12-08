interface NotIncludedDetailsProps {
    noIncluye: string;
}

export const NotIncludedDetails = ({ noIncluye }: NotIncludedDetailsProps) => {
    if (!noIncluye || noIncluye === 'No incluye no disponible') {
        return null;
    }

    return (
        <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: noIncluye }} />
    )
}
