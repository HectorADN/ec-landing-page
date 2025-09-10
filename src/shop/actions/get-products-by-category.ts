import { ecApi } from "@/api/ecApi";
import type { ProductsByCategoryResponse } from "@/interfaces/products-by-category-response.interface";

export const getProductsByCategoryAction = async(categoria: string): Promise<ProductsByCategoryResponse> => {

        const { data } = await ecApi.get<ProductsByCategoryResponse>(`/productosportipo/${categoria}`);

        // console.log(data);
    return data;
}