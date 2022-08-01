import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import SignUpFormValues from "../../../models/SingUpFormValues";
import { signUp } from "../../../store/slices/auth";
import signUpValidationSchema from "../../../validations/signUpValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from "./SignUpForm.module.css";

const signUpFormInitialValues: SignUpFormValues = {
  email: "",
  password: "",
  name: "",
};

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const submitHandler = (formValues: SignUpFormValues) => {
    dispatch(signUp({ formValues }));
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
          <img className={classes.logo} src="./images/dislinkt.png" />
          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Name"
              type="text"
              name="name"
              value="name"
            />
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
