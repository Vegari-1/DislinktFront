import * as Yup from "yup";

const commentValidationSchema = Yup.object().shape({
  content: Yup.string().required("* Required field"),
});

export default commentValidationSchema;
