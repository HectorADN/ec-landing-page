
import { products } from "@/mocks/products.mock"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Nuestros productos" subTitle="Algunos de nuestros productos se muestran a continuación." />
    
      <ProductsGrid products={products} />
    </>
  )
}
