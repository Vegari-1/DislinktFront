import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignUpForm.module.css";

const SignUpForm: React.FC = () => {
  const onSubmitHandler = () => {
    alert("Sign up");
  };

  return (
    <form>
      <h1 className={classes.label}>Sign In</h1>
      <PrimaryInputField text="Name" type="text" />
      <PrimaryInputField text="Email" type="email" />
      <PrimaryInputField text="Password" type="password" />
      <PrimaryButton text="Sign Up" onClickHandler={onSubmitHandler} />
    </form>
  );
};

export default SignUpForm;
