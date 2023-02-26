import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;

  @media (max-width: 900px) {
    max-width: 600px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Spacer = styled.div`
  margin: 20px 0;
`;
// TODO: Mobile Responsiveness
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   /* mobile styles */
//   @media (max-width: 768px) {
//     padding: 0 16px;
//   }

//   /* tablet styles */
//   @media (min-width: 768px) {
//     padding: 0 32px;
//   }

//   /* desktop styles */
//   @media (min-width: 1024px) {
//     padding: 0 64px;
// }
