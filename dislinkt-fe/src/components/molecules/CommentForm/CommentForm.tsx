import { Field, Formik } from "formik";
import CommentFormValues from "../../../models/forms/CommentFormValues";
import commentValidationSchema from "../../../validations/commentValidationSchema";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";
import TextPost from "../../atoms/TextPost/TextPost";
import classes from "./CommentForm.module.css";

const commentFormInitialValues: CommentFormValues = {
  content: "",
};

const CommentForm: React.FC = () => {
  const submitHandler = (formValues: CommentFormValues) => {
    console.log(formValues);
    console.log("dodaj komentar");
  };

  return (
    <div className={`${classes["new-comment"]} ${classes["comment"]}`}>
      <TextPost imageSize="45px" hasBody={false} />
      <Formik
        initialValues={commentFormInitialValues}
        validationSchema={commentValidationSchema}
        onSubmit={(formValues, { resetForm }) => {
          submitHandler(formValues);
          resetForm({
            values: { content: "" },
          });
        }}
      >
        {({ handleSubmit }) => (
          <div>
            <Field
              component={PrimaryTextArea}
              placeholder="Write a comment..."
              type="text"
              name="content"
              value="content"
            />
            <button
              className={classes["add-button"]}
              onClick={() => handleSubmit()}
              type="submit"
            >
              Post
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CommentForm;
