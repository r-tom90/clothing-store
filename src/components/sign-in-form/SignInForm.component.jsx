import React, { useState } from "react";

import FormInput from "../form-input/FormInput.component";
import Button, { buttonTypeClasses } from "../button/Button.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

// Form Object created to help refactor from more lines of code for useState
const defaultFormFields = {
  email: "",
  password: "",
};

import { SignInContainer, ButtonsContainer } from "./signInForm.styles";

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  //   Destructuring to allow us to access 'defaultFormFields'
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Event Handler to log in with google
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  //   Event Handlers
  const handleSubmit = async (event) => {
    // Prevents default
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log("user sign in failed", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={buttonTypeClasses.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
