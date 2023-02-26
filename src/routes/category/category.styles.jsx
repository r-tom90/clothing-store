import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-between;
  column-gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  // @media screen and (min-width: 1080px) {
  //   grid-template-columns: repeat(4, 1fr);
  // }
  // @media screen and (min-width: 1500px) {
  //   grid-template-columns: repeat(4, 1fr);
  // }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
