import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";

export interface TypeActividadDeCiudadFields {
    fields: {
        titulo: EntryFields.Symbol;
        imagen: ContentfulAsset;
        contenido: EntryFields.Symbol;
        url: EntryFields.Symbol;
    }
}

export type TypeActividadDeCiudad = ContentfulEntry<TypeActividadDeCiudadFields>;