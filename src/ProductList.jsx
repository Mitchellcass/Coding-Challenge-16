import React from 'react';
import ProductItem from './ProductItem'; // Import productitem function

function ProductList({ products }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} /> 
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
