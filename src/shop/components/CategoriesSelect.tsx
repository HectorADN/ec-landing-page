import { useProductsCategories } from "../hooks/useProductsCategories"

export const CategoriesSelect = () => {

    const { data } = useProductsCategories();

    const alerta = () => {
        alert(`Probando alerta: hector`);
    }

  return (
    <div className="flex flex-col text-white gap-2">
        <h3>Seleccione una categoría</h3>
        <select 
            id="categoria"
            onChange={alerta}
            className="block w-full px-4 py-3 text-base border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {
            data?.data.map(
                category => (
                    <option value={category.tipo}>{category.tipo}</option>
                )
            )
        }
        </select>  
    </div>
  
);
}
