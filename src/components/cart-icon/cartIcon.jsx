import React, { useContext } from "react";
import "./cartIcon.scss";
// Vite needs a package manager plugin to utilize svg
// import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";

import { AiFillShopping } from "react-icons/ai";

import { CartContext } from "../../contexts/CartContext";

const CartIcon = () => {
  // Allows for toggle action of when cart logo is clicked and cartCount to change based on items added
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    // TODO: Add in hover feature to toggle instead of onClick
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      {/* SVG issues with vite, therefore react-icons used */}
      {/* <ShoppingIcon className="shopping-icon" /> */}
      <AiFillShopping className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
