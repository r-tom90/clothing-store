import React, { createContext, useState } from "react";

import PRODUCTS from "../../src/shop-data.json";

// ? 2 pieces for to createContext, a ProductsContext and ProductsProvider

//ProductContext is the storage piece itself with the default value. "The actual value you want to access the product"
export const ProductsContext = createContext({
  products: [],
});

// ProductsProvider is the component, it goes to the index or main jsx and wraps the App component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
