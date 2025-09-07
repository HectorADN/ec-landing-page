import { ProductsByCategory } from '@/shop/components/ProductsByCategory';
import { CategoriesSelect } from '../../components/CategoriesSelect';

export const CategoryPage = () => {

  return (
    <div className='bg-black/80 py-10 w-full flex items-center justify-center'>
      <CategoriesSelect />
      <ProductsByCategory />
    </div>
  )
}
