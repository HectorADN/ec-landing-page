import { ecApi } from "@/api/ecApi";
import type { CategoriesResponse } from "@/interfaces/categories-response.interface";

export const getCategoriesAction = async(): Promise<CategoriesResponse> => {

    const { data } = await ecApi.get<CategoriesResponse>('/tiposdeproductos');

    // console.log(data);
    return data;
}