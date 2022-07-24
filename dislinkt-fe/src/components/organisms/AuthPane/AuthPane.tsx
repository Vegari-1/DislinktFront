import React, { useState } from "react";
import AuthOverlay from "../../molecules/AuthOverlay/AuthOverlay";
import SignInForm from "../../molecules/SignInForm/SignInForm";
import SignUpForm from "../../molecules/SignUpForm/SignUpForm";
import "./AuthPane.css";

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
    <div
      className={`${"container"} ${!signInActive ? "right-panel-active" : ""}`}
    >
      <div className={`${"form-container"} ${"sign-in-container"}`}>
        <SignInForm />
      </div>
      <div className={`${"form-container"} ${"sign-up-container"}`}>
        <SignUpForm />
      </div>
      <div className={"overlay-container"}>
        <div className={"overlay"}>
          <AuthOverlay
            overlayClass={"overlay-left"}
            header={"Connect to Dislinkt!"}
            text={"If you already have an account sign in below"}
            buttonText={"Sign In"}
            onClickHandler={onChangeSignInHandler}
          />
          <AuthOverlay
            overlayClass={"overlay-right"}
            header={"Welcome to Dislinkt!"}
            text={"If you don't have an account sign up below"}
            buttonText={"Sign Up"}
            onClickHandler={onChangeSignInHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPane;
