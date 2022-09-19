import { Field, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CommentFormValues from "../../../models/forms/CommentFormValues";
import { createComment } from "../../../store/actions/post-actions";
import { RootState } from "../../../store/store";
import commentValidationSchema from "../../../validations/commentValidationSchema";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";
import classes from "./CommentForm.module.css";

const commentFormInitialValues: CommentFormValues = {
  content: "",
};

interface CommentFormProps {
  id: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ id }) => {
  const userData = useSelector((state: RootState) => state.auth.userData);
  const dispatch = useDispatch();
  const submitHandler = (formValues: CommentFormValues) => {
    formValues.profileId = userData.id;
    dispatch(createComment(id, formValues));
  };

  return (
    <div className={`${classes["new-comment"]} ${classes["comment"]}`}>
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
