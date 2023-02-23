import React from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  EmptyMessage,
} from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {/* TODO: This below can be refactored with mapping */}
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {/* TODO: When Cart is empty, add in note saying "Your cart is empty" */}
      {cartItems.length ? (
        cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
