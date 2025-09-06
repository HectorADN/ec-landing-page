export interface CategoriesResponse {
    message: string;
    status:  number;
    error:   boolean;
    data:    Category[];
}

export interface Category {
    tipo: string;
}
