import * as Yup from "yup";

const postValidationSchema = Yup.object().shape({
  content: Yup.string().required("* Required field"),
});

export default postValidationSchema;
