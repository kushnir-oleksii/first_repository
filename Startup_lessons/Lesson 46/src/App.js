import React, { useState } from "react";
import Product from "./components/Product";
import Add from "./components/Add";

function App() {
  const productsList = [
    { name: 'Iphone', price: 800, id: 1 },
    { name: 'Watch', price: 100, id: 2 },
  ];
  const [products, setProducts] = useState(productsList);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const addProducts = () => {
    if (productPrice <= 0) {
      alert('The price should be more than 0');
      return;
    }

    if (productName.trim().length < 2) {
      alert('Product name should contain at least 2 symbols');
      return;
    }

    let key = Math.random();
    const newProduct = { name: productName, price: productPrice, id: key };
    setProducts((prev) => [...prev, newProduct]);
    setProductName('');
    setProductPrice('');
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <Add
        productName={productName}
        productPrice={productPrice}
        handleProductNameChange={handleProductNameChange}
        handleProductPriceChange={handleProductPriceChange}
        addProducts={addProducts}
      />
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
