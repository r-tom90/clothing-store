import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { buttonTypeClasses } from "../button/Button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./productCard.styles";

// check to see what parents named props, in this case it is product
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{`$${price}`}</Price>
      </Footer>
      <Button
        buttonType={buttonTypeClasses.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
