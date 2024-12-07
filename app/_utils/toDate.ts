export const toDate = (date: string | undefined) => {
    if (!date) return "";

    const [year, month, day] = date.split("-").map(Number);
    const formattedDate = new Date(
        Date.UTC(year, month - 1, day),
    ).toLocaleDateString('es', {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return formattedDate;
};