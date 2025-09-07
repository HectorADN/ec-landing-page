// import { Link } from "react-router";
import { useCategories } from "../hooks/useCategories";
import { useProductsByCategory } from "../hooks/useProductsByCategory";

export const ProductsByCategory = () => {

    const { category } = useCategories();
    const { data } = useProductsByCategory(category);

    console.log(data);

  return (
    <>
        <div className=" text-white grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-2 gap-2">
            <h2>{category}</h2>   
        </div>
    </>
  )
}

{/* <div>
    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
</div> */}
