
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { GalleryProducts } from "@/shop/components/GalleryProducts"
import { UbicacionGoogleMaps } from "@/shop/components/UbicacionGoogleMaps"

import { Welcome } from "@/shop/components/Welcome"

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <CustomJumbotron title="Nuestros productos" subTitle="Algunos de nuestros productos se muestran a continuación." />
      
      <GalleryProducts />

      <UbicacionGoogleMaps />
      {/* <ProductsGrid products={products} /> */}
    </>
  )
}
