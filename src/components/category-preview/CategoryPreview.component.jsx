import React from "react";

// Removed and added into styles
// import { Link } from "react-router-dom";

import ProductCard from "../product-card/ProductCard.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./categoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    // TODO: Allow for Responsive Layout
    <CategoryPreviewContainer>
      <h2>
        {/* TODO: Remove Link to and revert back to span */}
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {/* TODO: Allow for randomization of products to shop up each time with number.random() */}
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      {/* TODO: Adjust and allow for better styling instead */}
      {/* <Link to={title}>See more</Link> */}
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
