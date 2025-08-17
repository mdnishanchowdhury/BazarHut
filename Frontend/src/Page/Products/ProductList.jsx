import Product from "./Product";
import useProducts from "../Hook/useProducts";

function ProductList() {
  const { products } = useProducts();
 
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
