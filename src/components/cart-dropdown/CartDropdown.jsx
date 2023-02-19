import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import "./cartDropdown.scss";

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  // useNavigate allows us to get a navigation function from react-router
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {/* TODO: Style total cost price */}
      <span className="cart-subtotal">
        Subtotal: <span className="cart-total">${cartTotal}</span>
      </span>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
