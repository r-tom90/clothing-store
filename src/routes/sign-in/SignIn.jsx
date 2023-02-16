import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-up-form/signUpForm";

const SignIn = () => {
  // Event listener to log in with google
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
