import { Field, Formik } from "formik";

import RegisterFormValues from "../../../models/forms/RegisterFormValues";
import registerValidationSchema from "../../../validations/registerValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";

import classes from './RegisterForm.module.css';

const registerFormInitialValues: RegisterFormValues = {
  name: "",
  surname: "",
  gender: "",
  dateOfBirth: new Date(),
  phone: "",
  public: false,
  picture: "",
};

const RegisterForm: React.FC = () => {

  const submitHandler = (formValues : RegisterFormValues) {
    console.log({formValues})

  }

  return (
    <Formik
      initialValues={registerFormInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-in-form"]}>
          <h1 className={classes.label}>Sign In</h1>
          <img className={classes.logo} src="./images/dislinkt.png" />
          <div className={classes.fields}>
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

export default RegisterForm;
