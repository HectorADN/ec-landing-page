import { Link } from "react-router";
import { useGalleryProducts } from "../hooks/useGalleryProducts"

export const GalleryProducts = () => {

    const { data, isLoading } = useGalleryProducts();

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-2 gap-2">
        
        {
            isLoading && (<div className="w-full text-2xl text-white text-center">Cargando productos</div>)
        }

        { 
            data?.data.map(p => (
                <div>
                    <img 
                        className="h-auto max-w-full rounded-lg" 
                        src={p.default_imagen} alt="" />
                </div>
            ))
        }

        
        
    </div>
    <div className="w-full flex items-center justify-center py-10">
            <Link to="/category/all"
                className="text-white bg-orange-400 p-2 rounded-2xl text-xl hover:bg-orange-500 duration-300"
            >
                Ver más productos
            </Link>
    </div>
    </>
  )
}

{/* <div>
    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
</div> */}
