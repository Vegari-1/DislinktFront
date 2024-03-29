import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUpFormValues from "../../../models/forms/SingUpFormValues";
import { signUp } from "../../../store/actions/auth-actions";
import signUpValidationSchema from "../../../validations/signUpValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignUpForm.module.css";

const signUpFormInitialValues: SignUpFormValues = {
  email: "",
  username: "",
  password: "",
};

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (formValues: SignUpFormValues) => {
    navigate("/register");
    dispatch(signUp(formValues));
  };

  return (
    <Formik
      initialValues={signUpFormInitialValues}
      validationSchema={signUpValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-up-form"]}>
          <h1 className={classes.label}>Sign Up</h1>
          <img
            className={classes.logo}
            src="./images/dislinkt.png"
            alt="logo"
          />
          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Email"
              type="email"
              name="email"
              value="email"
            />
            <Field
              component={PrimaryInputField}
              text="Username"
              type="text"
              name="username"
              value="username"
            />
            <Field
              component={PrimaryInputField}
              text="Password"
              type="password"
              name="password"
              value="password"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Sign Up"
              onClickHandler={handleSubmit}
              isSubmit
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
