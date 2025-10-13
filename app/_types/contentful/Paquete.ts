import { EntryFields } from "contentful";
import { ContentfulAsset, ContentfulEntry } from "./ContentfulEntry";
import { TypeDestino } from "./Destino";
import { TypePais } from "./Pais";
import { TypeCiudad } from "./Ciudad";

export interface TypePaqueteFields {
    fields: {
        slug: EntryFields.Symbol;
        id: EntryFields.Symbol;
        nombre: EntryFields.Symbol;
        imagen: ContentfulAsset;
        precio: EntryFields.Number;
        destino: TypeDestino;
        dias: EntryFields.Number;
        noches: EntryFields.Number;
        habitacionPromocionada: EntryFields.Symbol;
        precioPromocional: EntryFields.Number;
        moneda: EntryFields.Symbol;
        paises: TypePais[];
        ciudades: TypeCiudad[];
        itinerario: EntryFields.Text;
        aerolinea: EntryFields.Symbol;
        precios: EntryFields.Text;
        incluye: EntryFields.Text;
        noIncluye: EntryFields.Text;
        notas: EntryFields.Text;
        toursOpcionales: EntryFields.Text;
        hoteles: EntryFields.Text;
        visas: EntryFields.Text;
        salidasDiarias: EntryFields.Boolean;
        diasDeSalidas: EntryFields.Symbol;
        urlImagen: EntryFields.Symbol;
    }
}

export type TypePaquete = ContentfulEntry<TypePaqueteFields>;