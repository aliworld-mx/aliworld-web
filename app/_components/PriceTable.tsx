interface PriceTableProps {
    precios: string;
}

export const PriceTable = ({ precios }: PriceTableProps) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: precios }} />
    )
}
