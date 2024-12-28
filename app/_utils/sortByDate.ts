import { TypeSalida } from "../_types/contentful/Salida";

export const sortArrayByDate = (arr: TypeSalida[]) => {
    return arr.sort((a, b) => {
        return new Date(a.fields.fecha).getTime() - new Date(b.fields.fecha).getTime();
    });
}