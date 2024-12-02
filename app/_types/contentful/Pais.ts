import { EntryFields } from "contentful";
import { ContentfulEntry } from "./ContentfulEntry";

export interface TypePaisFields {
    fields: {
        identificador: EntryFields.Symbol;
        nombre: EntryFields.Symbol;
    }
}

export type TypePais = ContentfulEntry<TypePaisFields>;