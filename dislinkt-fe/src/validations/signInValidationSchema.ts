import * as Yup from "yup";

const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("* Email is not in the valid format")
    .required("* Required field"),
  password: Yup.string().required("* Required field"),
});

export default signInValidationSchema;
