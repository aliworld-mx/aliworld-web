import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";

export interface TypeAutorFields {
    fields: {
        nombre: EntryFields.Symbol;
        imagen: ContentfulAsset;
    }
}

export type TypeAutor = ContentfulEntry<TypeAutorFields>;