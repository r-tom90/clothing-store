import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      This website was created with the invaluable guidance of
      <a href="https://zerotomastery.io/courses/learn-react/" target="blank">
        {" "}
        The Complete React Developer in 2023 course
      </a>
      , which covers advanced React development techniques including Redux,
      Hooks, and GraphQL. Thank you to the Zero to Mastery team for providing
      comprehensive tutorials and empowering developers to reach mastery.
    </FooterContainer>
  );
};

export default Footer;
