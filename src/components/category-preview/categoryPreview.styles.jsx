import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 28px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1080px) {
    font-size: 32px;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  column-gap: 20px;

  @media screen and (min-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ViewMore = styled(Link)`
  font-size: 16px;
  color: maroon;
  text-decoration: underline;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 12px;
  margin-left
  cursor: pointer;
  &:hover {
    color: #e03c31;
  }

`;
