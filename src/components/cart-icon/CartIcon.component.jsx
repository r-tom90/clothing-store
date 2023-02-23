import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cartIcon.styles";

const CartIcon = () => {
  // Allows for toggle action of when cart logo is clicked and cartCount to change based on items added
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    // TODO: Add in hover feature to toggle instead of onClick
    <CartIconContainer onClick={toggleIsCartOpen}>
      {/* SVG issues with vite, therefore react-icons used */}
      {/* <ShoppingIcon className="shopping-icon" /> */}
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
