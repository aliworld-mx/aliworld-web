interface NotIncludedDetailsProps {
    noIncluye: string;
}

export const NotIncludedDetails = ({ noIncluye }: NotIncludedDetailsProps) => {
    if (!noIncluye) {
        return null;
    }

    return (
        <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: noIncluye }} />
    )
}
