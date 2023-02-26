import styled from "styled-components";

export const FooterContainer = styled.div`
  text-align: center;
  font-size: 12px;

  & a {
    color: #0097b2;
    font-weight: bold;
  }
  & :hover {
    color: #e03c31;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1080px) {
    font-size: 16px;
    margin: 10px;
  }
`;
