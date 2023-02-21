import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext.jsx";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./cartIcon.styles";

const CartIcon = () => {
  // Allows for toggle action of when cart logo is clicked and cartCount to change based on items added
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

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
