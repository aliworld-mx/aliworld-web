import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";

export interface TypeActividadFields {
    fields: {
        slug: EntryFields.Symbol;
        nombre: EntryFields.Symbol;
        imagen: ContentfulAsset;
        klookUrl: EntryFields.Symbol;
        etiquetas: EntryFields.Symbol[];
        calificacion: EntryFields.Number;
    }
}

export type TypeActividad = ContentfulEntry<TypeActividadFields>;