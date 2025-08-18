import React from 'react'
import Product from '../Products/Card.jsx'

function ProductFilterList({filteredProducts}) {
  return (
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {
            filteredProducts.map((item) => (
              <Product item={item}></Product>
            ))
          }
        </div>
      </div>
  )
}

export default ProductFilterList