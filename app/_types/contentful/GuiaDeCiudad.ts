import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";
import { TypeFact } from "./Fact";
import { TypeActividadDeCiudad } from "./ActividadDeCiudad";
import { TypePlatillo } from "./Platillo";
import { TypePreguntaFrecuente } from "./PreguntasFrecuentes";

export interface TypeGuiaDeCiudadFields {
    fields: {
        slug: EntryFields.Symbol;
        nombreDeCiudad: EntryFields.Symbol;
        encabezado: EntryFields.Symbol;
        descripcion: EntryFields.Text;
        imagenEncabezado: ContentfulAsset;
        url: EntryFields.Symbol;
        subEncabezado: EntryFields.Symbol;
        contenido: EntryFields.Text;
        imagenContenido: ContentfulAsset;
        facts: TypeFact[];
        contenidoActividades: EntryFields.Text;
        actividades: TypeActividadDeCiudad[];
        contenidoPlatillos: EntryFields.Text;
        platillos: TypePlatillo[];
        preguntasFrecuentes: TypePreguntaFrecuente[];
    }
}

export type TypeGuiaDeCiudad = ContentfulEntry<TypeGuiaDeCiudadFields>;