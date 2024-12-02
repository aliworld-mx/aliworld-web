export const toMoney = (price: number) => {
    const priceValue = price.toLocaleString('en', {
        style: "decimal",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    });

    return `$${priceValue}`;
};

