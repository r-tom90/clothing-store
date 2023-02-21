import React, { useContext } from "react";

import Button, { buttonTypeClasses } from "../button/Button.component";

import { CartContext } from "../../contexts/CartContext";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./productCard.styles";

// check to see what parents named props, in this case it is product
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{`$${price}`}</Price>
      </Footer>
      <Button
        buttonType={buttonTypeClasses.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
