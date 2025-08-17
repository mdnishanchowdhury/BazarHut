import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext(null);
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    if (!products) return <p>Loading...</p>; 
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider