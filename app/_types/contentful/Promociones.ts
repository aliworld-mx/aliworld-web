import { EntryFields } from "contentful";
import { ContentfulEntry } from "./ContentfulEntry";
import { TypePaquete } from "./Paquete";

export interface TypePromocionesFields {
    fields: {
        nombre: EntryFields.Symbol;
        paquetes: TypePaquete[]
    }
}

export type TypePromociones = ContentfulEntry<TypePromocionesFields>;