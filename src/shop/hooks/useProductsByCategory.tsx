import { useQuery } from "@tanstack/react-query";
import { getProductsByCategoryAction } from "../actions/get-products-by-category";

export const useProductsByCategory = (categoria: string) => {
    console.log('use Products by Categoria: '+categoria);
    return useQuery({
        queryKey: ['productsbycategories'],
        queryFn: () => getProductsByCategoryAction(categoria),
    });
}

