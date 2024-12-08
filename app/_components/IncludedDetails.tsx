interface IncludedDetailsProps {
    incluye: string;
}

export const IncludedDetails = ({ incluye }: IncludedDetailsProps) => {
    if (!incluye || incluye === 'Incluye no disponible') {
        return null;
    }

    return (
        <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: incluye }} />
    )
}
