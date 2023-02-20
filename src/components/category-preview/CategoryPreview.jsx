import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "../product-card/ProductCard";

import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    // TODO: Allow for Responsive Layout
    <div className="category-preview-container">
      <h2>
        {/* TODO: Remove Link to and revert back to span */}
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {/* TODO: Allow for randomization of products to shop up each time with number.random() */}
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {/* TODO: Adjust and allow for better styling instead */}
      {/* <Link to={title}>See more</Link> */}
    </div>
  );
};

export default CategoryPreview;
