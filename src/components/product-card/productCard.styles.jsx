import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 230px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1080px) {
    font-size: 22px;
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
