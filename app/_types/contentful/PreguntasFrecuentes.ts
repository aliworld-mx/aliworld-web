import { EntryFields } from "contentful";
import { ContentfulEntry } from "./ContentfulEntry";

export interface TypePreguntaFrecuenteFields {
    fields: {
        pregunta: EntryFields.Symbol;
        respuesta: EntryFields.Text;
    }
}

export type TypePreguntaFrecuente = ContentfulEntry<TypePreguntaFrecuenteFields>;