import React, { useState } from 'react';
import ProductList from './ProductList'; 
import AddProductForm from './AddProductForm'; 

function App() {
  // Default list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1200, description: 'Laptop' },
    { id: 2, name: 'Phone', price: 1000, description: 'Latest Smartphone' },
    { id: 3, name: 'Headphones', price: 150, description: 'Bluetooth headphones' },
    { id: 4, name: 'Keyboard', price: 30, description: 'Keyboard' },
  ]);

  return (
    <div className="App">
      <h1>Product List</h1>
      {/* Render ProductList and pass the products as props */}
      <ProductList products={products} />
      
      {/* Render AddProductForm */}
      <AddProductForm setProducts={setProducts} />
    </div>
  );
}

export default App;
