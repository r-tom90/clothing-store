import React, { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import CategoryPreview from "../../components/category-preview/CategoryPreview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {/* Gives me an array of all the key values */}
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
