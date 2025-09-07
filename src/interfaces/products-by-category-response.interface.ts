import type { Imagenes } from "./imagenes.interface";

export interface ProductsByCategoryResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    ProductByCategory[];
}

export interface ProductByCategory {
    id:             number;
    nombre:         string;
    unidad:         string;
    tipo:           string;
    stock_minimo:   string;
    disponible:     number;
    temporada:      string;
    default_imagen: string;
    imagenes?:       Imagenes[];
}
