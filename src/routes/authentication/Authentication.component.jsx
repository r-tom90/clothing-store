import { Fragment } from "react";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";
import SignInForm from "../../components/sign-in-form/SignInForm.component";
import { AuthenticationContainer, Spacer } from "./authentication.styles";
import Footer from "../../components/footer/footer.component";

const Authentication = () => {
  return (
    <Fragment>
      <AuthenticationContainer>
        <SignInForm />
        <Spacer />
        <SignUpForm />
      </AuthenticationContainer>
      <Footer />
    </Fragment>
  );
};

export default Authentication;
