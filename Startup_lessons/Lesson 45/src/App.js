import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState({
    coffe: 0,
    sugar: 0
  });
  const [showRemoveCoffee, setShowRemoveCoffee] = useState(false);
  const [showRemoveSugar, setShowRemoveSugar] = useState(false);

  const addProduct = (product) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [product]: prevProducts[product] + 1
    }));
  };

  const removeProduct = (product) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [product]: Math.max(prevProducts[product] - 1, 0)
    }));
  };

  const save = () => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const clear = () => {
    localStorage.removeItem("products");
    setProducts({
      coffe: 0,
      sugar: 0
    });
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));

    // Update the visibility of "Remove" buttons
    setShowRemoveCoffee(products.coffe > 0);
    setShowRemoveSugar(products.sugar > 0);
  }, [products]);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffee: ${products.coffe}`}</span>
          <button onClick={() => addProduct("coffe")}>Add</button>
          {showRemoveCoffee && (
            <button onClick={() => removeProduct("coffe")}>Remove</button>
          )}
        </div>
        <div className="product">
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={() => addProduct("sugar")}>Add</button>
          {showRemoveSugar && (
            <button onClick={() => removeProduct("sugar")}>Remove</button>
          )}
        </div>
        <div className="save">
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
