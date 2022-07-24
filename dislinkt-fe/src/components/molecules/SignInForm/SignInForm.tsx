import { Field, Formik } from "formik";

import SignInFormValues from "../../../models/SignInFormValues";
import signInValidationSchema from "../../../validations/signInValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignInForm.module.css";

const signInFormInitialValues: SignInFormValues = {
  email: "",
  password: "",
};

const SignInForm: React.FC = () => {
  const submitHandler = (values: SignInFormValues) => {
    console.log({ values });
  };

  return (
    <Formik
      initialValues={signInFormInitialValues}
      validationSchema={signInValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-in-form"]}>
          <h1 className={classes.label}>Sign In</h1>
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
