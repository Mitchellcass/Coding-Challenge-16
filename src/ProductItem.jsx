import React from 'react';

function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </li>
  );
}

export default ProductItem;

