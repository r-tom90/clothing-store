import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import "./checkout.scss";

const Checkout = () => {
  // useContext allows us to access the required stored data and functions from CartContext
  const { cartItems, removeItemToCart, addItemToCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span onClick={() => removeItemToCart(cartItem)}>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
