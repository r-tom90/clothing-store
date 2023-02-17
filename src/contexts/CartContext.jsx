import React, { createContext, useState } from "react";

// ? 2 pieces for to createContext, a CartContext and ProductsProvider

//CartContext is the storage piece itself with the default value. "The actual value you want to access the product"
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => [],
});

// CartProvider is the component, it goes to the index or main jsx and wraps the App component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
