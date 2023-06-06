import React from "react";

function Add({ productName, productPrice, handleProductNameChange, handleProductPriceChange, addProducts }) {
  return (
    <div className="add">
      <label>Product name</label>
      <input
        onInput={handleProductNameChange}
        type="text"
        value={productName}
      />
      <label>Product price</label>
      <input
        onInput={handleProductPriceChange}
        type="number"
        value={productPrice}
      />
      <button onClick={addProducts} type="button">
        Add
      </button>
    </div>
  );
}

export default Add;
