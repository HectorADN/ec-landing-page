import { ecApi } from "@/api/ecApi";
import type { ProductsGalleryResponse } from "@/interfaces/products-gallery-response.interface";


export const getGalleryProductsAction = async():Promise<ProductsGalleryResponse> => {

    const { data } = await ecApi.get<ProductsGalleryResponse>('/home-web/productosgallery');

    const productsWithImageUrls = data.data.map(product => ({
        ...product,
        default_imagen: import.meta.env.VITE_IMAGES_URL+product.default_imagen,
    }));

    // console.log(data);
    return {
        ...data,
        data: productsWithImageUrls
    };
}