import { useContext } from 'react'
import { ProductContext } from '../../Providers/ProductProvider'

const useProducts = () => {
    const useProducts = useContext(ProductContext);
    return useProducts;
}

export default useProducts