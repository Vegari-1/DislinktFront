import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("* Required field"),
  surname: Yup.string().required("* Required field"),
  dateOfBirth: Yup.date().required("* Required field"),
  phone: Yup.string().required("* Required field"),
  public: Yup.bool().required("* Required field"),
  picture: Yup.bool().required("* Required field"),
});

export default registerValidationSchema;
