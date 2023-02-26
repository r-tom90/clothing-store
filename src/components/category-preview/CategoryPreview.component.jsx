import ProductCard from "../product-card/ProductCard.component";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
  ViewMore,
} from "./categoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {/* TODO: Allow for randomization of products to shop up each time with number.random() */}
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      <ViewMore to={title}>View more</ViewMore>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
