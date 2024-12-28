export const toDate = (date: string | undefined) => {
    if (!date) return "";

    const formattedDate = new Date(date).toLocaleDateString('es', {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return formattedDate;
};