import { EntryFields } from "contentful";
import { ContentfulEntry } from "./ContentfulEntry";

export interface TypeCiudadFields {
    fields: {
        identificador: EntryFields.Symbol;
        nombre: EntryFields.Symbol;
    }
}

export type TypeCiudad = ContentfulEntry<TypeCiudadFields>;