import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/CategoryPreview.component";
import Spinner from "../../components/spinner/Spinner.component";
import Footer from "../../components/footer/footer.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {/* Gives me an array of all the key values */}
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
      <Footer />
    </Fragment>
  );
};

export default CategoriesPreview;
