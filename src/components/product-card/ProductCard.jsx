import React from "react";
import "./productCard.scss";
import Button from "../button/Button";

// check to see what parents named props, in this case it is product
const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
