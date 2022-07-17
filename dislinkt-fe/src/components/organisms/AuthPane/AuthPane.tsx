import React, { useState } from "react";
import AuthOverlay from "../../molecules/AuthOverlay/AuthOverlay";
import SignInForm from "../../molecules/SignInForm/SignInForm";
import SignUpForm from "../../molecules/SignUpForm/SignUpForm";
import classes from "./AuthPane.module.css";

const AuthPane: React.FC = () => {
  const [signInActive, setSignInActive] = useState(true);

  const onChangeSignInHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSignInActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes.container}>
      <div
        className={`${classes["form-container"]} ${classes["sign-in-container"]}`}
      >
        <SignInForm />
      </div>
      <div
        className={`${classes["form-container"]} ${classes["sign-up-container"]}`}
      >
        <SignUpForm />
      </div>
      <AuthOverlay
        overlayClass={signInActive ? "overlay-right" : "overlay-left"}
        header={signInActive ? "Hello, Friend!" : "Welcome back!"}
        text={
          signInActive
            ? "Enter your personal details and start journey with us"
            : "To keep connected with us please login with your personal info"
        }
        buttonText={signInActive ? "Sign Up" : "Sign In"}
        onClickHandler={onChangeSignInHandler}
      />
    </div>
  );
};

export default AuthPane;
