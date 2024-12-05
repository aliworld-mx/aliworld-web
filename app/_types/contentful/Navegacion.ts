import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";

export interface TypeNavegacionFields {
    fields: {
        nombre: EntryFields.Symbol;
        promocion: ContentfulAsset;
        favorito: ContentfulAsset;
    }
}

export type TypeNavegacion = ContentfulEntry<TypeNavegacionFields>;