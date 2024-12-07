import { EntryFields } from "contentful";
import { ContentfulEntry } from "./ContentfulEntry";

export interface TypeSalidaFields {
    fields: {
        id: EntryFields.Symbol;
        fecha: EntryFields.Date;
        suplemento: EntryFields.Symbol;
    }
}

export type TypeSalida = ContentfulEntry<TypeSalidaFields>;