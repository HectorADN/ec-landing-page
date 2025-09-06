import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { CategoryPage } from "./shop/pages/category/CategoryPage";
import { InformationPage } from "./shop/pages/information/InformationPage";
import { UsPage } from "./shop/pages/us/UsPage";

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
            },
            {
                path: 'information',
                element: <InformationPage />
            },
            {
                path: 'about-us',
                element: <UsPage />
            }
        ],
    },

    // Otra Ruta no Válida redirecciona a '/'
    {
        path: '*',
        element: <Navigate to='/' />,
    }
]);

