import { useCategories } from "../hooks/useCategories";
import { useProductsCategories } from "../hooks/useProductsCategories"

export const CategoriesSelect = () => {

    const { data } = useProductsCategories();
    const { onChangeCategory } = useCategories();

    const handleSelect = (event) => {
        onChangeCategory(event.target.value);
    }

  return (
        <div className="flex text-gray-400 gap-2 border rounded-2xl p-3">
            <h3>Seleccione categoría</h3>
            <select
                id="categoria"
                onChange={handleSelect}
                className="block w-full px-3 py-2 text-base border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
                data?.data.map(
                    category => (
                        <option key={category.tipo} value={category.tipo}>{category.tipo}</option>
                    )
                )
            }
            </select>
        </div>
    );
}
