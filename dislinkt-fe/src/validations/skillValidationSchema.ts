import * as Yup from "yup";

const skillValidationSchema = Yup.object().shape({
  name: Yup.string().required("* Required field"),
});

export default skillValidationSchema;
