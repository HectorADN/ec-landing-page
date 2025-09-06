
export interface ProductsGalleryResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    GalleryProduct[];
}

export interface GalleryProduct {
    id:             number;
    nombre:         string;
    unidad:         string;
    tipo:           string;
    stock_minimo:   number;
    disponible:     boolean;
    temporada:      string;
    default_imagen: string;
    imagenes:       Imagenes[];
}

export interface Imagenes {
    id:           number;
    imagen:       string;
    productos_id: number;
}
