import styled from "styled-components";

// Vite needs a package manager plugin to utilize svg
// import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { AiFillShopping } from "react-icons/ai";

export const ShoppingIcon = styled(AiFillShopping)`
  width: 35px;
  height: 35px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 47px;
    height: 47px;
  }
  @media screen and (min-width: 1080px) {
    width: 50px;
    height: 50px;
  }
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 13.5px;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1080px) {
    font-size: 12px;
  }
`;
