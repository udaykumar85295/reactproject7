// create a component that shows the image description and price and quantity of the product.
import React from "react";

function ProductCard({ description, price, quantity, name }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>{name}</h2>
      <h3>{description}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default ProductCard;
