import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, removeItemToCart, addItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      {/* &#10005; creates a remove button */}
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
