import Product from '../Products/Card.jsx';

function ProductFilterList({ filteredProducts }) {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <Product key={item._id || item.id} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center mt-3">
            <span className="loading loading-spinner loading-xl"></span>
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductFilterList;
