import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { CategoryPage } from "./shop/pages/category/CategoryPage";

export const appRouter = createBrowserRouter([
    // Main Routes
    {
        path: '/',
        element: <ShopLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'product/:id',
                element: <ProductPage />
            },
            {
                path: 'category/:category',
                element: <CategoryPage />
            }
        ],
    },

    // Otra Ruta no Válida redirecciona a '/'
    {
        path: '*',
        element: <Navigate to='/' />,
    }
]);

