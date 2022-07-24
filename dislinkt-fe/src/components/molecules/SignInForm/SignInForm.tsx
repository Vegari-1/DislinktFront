import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import SignInFormValues from "../../../models/SignInFormValues";
import { authActions } from "../../../store/slices/auth";
import { RootState } from "../../../store/store";
import signInValidationSchema from "../../../validations/signInValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignInForm.module.css";

const signInFormInitialValues: SignInFormValues = {
  email: "",
  password: "",
};

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const submitHandler = (values: SignInFormValues) => {
    console.log({ values });

    dispatch(authActions.login());
  };

  return (
    <Formik
      initialValues={signInFormInitialValues}
      validationSchema={signInValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-in-form"]}>
          <h1 className={classes.label}>{isAuthenticated}</h1>
          <img className={classes.logo} src="./images/dislinkt.png" />
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
              text="Password"
              type="password"
              name="password"
              value="password"
            />
          </div>
          <div className={classes.button}>
            <PrimaryButton
              text="Sign In"
              onClickHandler={handleSubmit}
              isSubmit
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignInForm;
