import React, { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import { CartContext } from "../../contexts/CartContext";

import "./checkout.scss";

const Checkout = () => {
  // useContext allows us to access the required stored data and functions from CartContext
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {/* TODO: This below can be refactored with mapping */}
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
