import React, { createContext, useState } from "react";

// Helper function to find products to match cartItems
const addCartItems = (cartItems, productToAdd) => {
  // Find id cartItems contain productToAdd
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // If found, increment quantity
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems or new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// ? 2 pieces for to createContext, a CartContext and ProductsProvider
//CartContext is the storage piece itself with the default value. "The actual value you want to access the product"
export const CartContext = createContext({
  // By Default, this will be false
  isCartOpen: false,
  // Which will point to a function
  setIsCartOpen: () => [],
  cartItems: [],
  addItemToCart: () => [],
});

// CartProvider is the component, it goes to the index or main jsx and wraps the App component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItems(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
