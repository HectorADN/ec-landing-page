import { useQuery } from "@tanstack/react-query";
import { getGalleryProductsAction } from "../actions/get-gallery-products";

export const useGalleryProducts = () => {     
  
    return useQuery({
        queryKey: ['galleryproducts'],
        queryFn: getGalleryProductsAction,
    });
}
