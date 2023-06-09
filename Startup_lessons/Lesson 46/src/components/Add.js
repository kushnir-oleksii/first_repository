import React from "react";

function Add({
  productName,
  productPrice,
  handleProductNameChange,
  handleProductPriceChange,
  validateName,
  validatePrice,
  isValidateName,
  isValidatePrice,
  addProducts
}) {
  return (
    <div className="add">
      <label style={{ color: isValidateName ? 'black' : 'brown' }}>Product name</label>
      <input
        style={{ backgroundColor: isValidateName ? '#fff' : '#ee6060' }}
        onBlur={validateName}
        onInput={handleProductNameChange}
        value={productName}
        type="text"
      />
      <label style={{ color: isValidatePrice ? 'black' : 'brown' }}>Product price</label>
      <input
        style={{ backgroundColor: isValidatePrice ? '#fff' : '#ee6060' }}
        onBlur={validatePrice}
        onInput={handleProductPriceChange}
        value={productPrice}
        type="number"
      />
      <button onClick={addProducts} type="button">
        Add
      </button>
    </div>
  );
}

export default Add;
