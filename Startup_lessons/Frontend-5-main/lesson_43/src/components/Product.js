import React from "react";

function Product(props) {
  const remove = () => {
    props.onRemove(props.id);
  };

  return (
    <div className="product">
      <div className="body">
        <h1 className="title">{props.name}</h1>
        <div className="price">{props.price}</div>
      </div>
      <button type="button" onClick={remove}>
        Remove
      </button>
    </div>
  );
}

export default Product;

// <button type="button">Remove</button>
