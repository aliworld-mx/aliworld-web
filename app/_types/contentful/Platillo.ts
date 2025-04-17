import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";

export interface TypePlatilloFields {
    fields: {
        titulo: EntryFields.Symbol;
        imagen: ContentfulAsset;
        descripcion: EntryFields.Text;
    }
}

export type TypePlatillo = ContentfulEntry<TypePlatilloFields>;