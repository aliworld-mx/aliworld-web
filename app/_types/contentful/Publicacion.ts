import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";
import { TypeCiudad } from "./Ciudad";
import { TypeAutor } from "./Autor";

export interface TypePublicacionFields {
    fields: {
        slug: EntryFields.Symbol;
        titulo: EntryFields.Symbol;
        descripcion: EntryFields.Text;
        contenido: EntryFields.RichText;
        portada: ContentfulAsset;
        fecha: EntryFields.Date;
        ciudades: TypeCiudad[];
        etiquetas: EntryFields.Symbol[];
        autor: TypeAutor;
    }
}

export type TypePublicacion = ContentfulEntry<TypePublicacionFields>;