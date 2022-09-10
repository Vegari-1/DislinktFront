import * as Yup from "yup";

const today = new Date();
today.setHours(23, 59, 59, 999);

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("* Required field"),
  surname: Yup.string().required("* Required field"),
  gender: Yup.string().required("* Required field"),
  dateOfBirth: Yup.date()
    .max(today, "* Birth date cannot be in the future")
    .required("* Required field"),
  phone: Yup.string().required("* Required field"),
  public: Yup.bool().required("* Required field"),
  biography: Yup.string().required("* Required field"),
});

export default registerValidationSchema;
