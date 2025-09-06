import { useQuery } from "@tanstack/react-query";
import { getCategoriesAction } from "../actions/get-categories";

export const useProductsCategories = () => {     
  
    return useQuery({
        queryKey: ['categoriesproducts'],
        queryFn: getCategoriesAction,
    });
}
