import { EntryFields } from "contentful";
import { ContentfulEntry } from "./ContentfulEntry";
import { TypePaquete } from "./Paquete";

export interface TypeFavoritosFields {
    fields: {
        nombre: EntryFields.Symbol;
        paquetes: TypePaquete[]
    }
}

export type TypeFavoritos = ContentfulEntry<TypeFavoritosFields>;