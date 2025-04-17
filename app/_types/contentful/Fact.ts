import { EntryFields } from "contentful";
import { ContentfulEntry } from "./ContentfulEntry";

export interface TypeFactFields {
    fields: {
        titulo: EntryFields.Symbol;
        contenido: EntryFields.Symbol;
    }
}

export type TypeFact = ContentfulEntry<TypeFactFields>;