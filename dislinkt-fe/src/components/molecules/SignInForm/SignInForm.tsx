import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignInForm.module.css";

const SignInForm: React.FC = () => {
  const onSubmitHandler = () => {
    alert("Sign in");
  };

  return (
    <form>
      <h1 className={classes.label}>Sign In</h1>
      <PrimaryInputField text="Email" type="email" />
      <PrimaryInputField text="Password" type="password" />
      <PrimaryButton text="Sign In" onClickHandler={onSubmitHandler} />
    </form>
  );
};

export default SignInForm;
