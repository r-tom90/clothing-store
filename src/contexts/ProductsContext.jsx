import React, { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";

// ! this is used as a once off to upload the json/js array of objects to firebase, can be deleted and removed after
// import SHOP_DATA from "../../src/shop-data.js";

// ? 2 pieces for to createContext, a ProductsContext and ProductsProvider

//ProductContext is the storage piece itself with the default value. "The actual value you want to access the product"
export const ProductsContext = createContext({
  products: [],
});

// ProductsProvider is the component, it goes to the index or main jsx and wraps the App component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };

  // ! this is used as a once off to upload the json/js array of objects to firebase, can be deleted and removed after
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
