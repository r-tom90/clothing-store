import React, { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

// ! this is used as a once off to upload the json/js array of objects to firebase, can be deleted and removed after
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";
// import SHOP_DATA from "../../src/shop-data.js";

// ? 2 pieces for to createContext, a CategoriesContext and CategoriesProvider

//ProductContext is the storage piece itself with the default value. "The actual value you want to access the product"
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// CategoriesProvider is the component, it goes to the index or main jsx and wraps the App component
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // async functions always must be created as a variable instead called right away with useEffect
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // ! this is used as a once off to upload the json/js array of objects to firebase with "catagories" as its title, can be deleted and removed after
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
