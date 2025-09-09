
import { useEffect, useState } from "react";

export const useCategories = () => {

    const [ category, setCategory ] = useState('Encurtidos');



    const onChangeCategory = (theCategory: string) => {
        setCategory(theCategory);
    }

    useEffect(() => {
        searchProducts(category);
    }, [category]);

    const searchProducts = (categoria: string) => {
        console.log(`Buscando por categoria: ---> ${categoria}`);
    }

    return {
        category,
        onChangeCategory,
    };
}