import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartSubtotal,
  CartTotal,
} from "./cartDropdown.styles.jsx";

const CartDropdown = () => {
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  // useNavigate allows us to get a navigation function from react-router
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {/* TODO: Style total cost price */}
      <CartSubtotal>
        Subtotal: <CartTotal>${cartTotal}</CartTotal>
      </CartSubtotal>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
