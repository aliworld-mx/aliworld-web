import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";

export interface TypeDestinoFields {
    fields: {
        id: EntryFields.Symbol;
        nombre: EntryFields.Symbol;
        imagen: ContentfulAsset;
        descripcion: EntryFields.Text;
    }
}

export type TypeDestino = ContentfulEntry<TypeDestinoFields>;