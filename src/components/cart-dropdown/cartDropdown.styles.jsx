import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../../components/button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  // ? Nesting to target custom button
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}, {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: large;
`;

export const CartTotal = styled.span`
  font-weight: bold;
  color: maroon;
`;
