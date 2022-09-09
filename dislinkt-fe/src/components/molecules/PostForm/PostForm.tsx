import { Field, Formik } from "formik";
import { ChangeEvent, useRef, useState } from "react";
import { convertBlobToBase64 } from "../../../helpers/convertBlobToBase64";
import { ReactComponent as UploadIcon } from "../../../assets/svg/upload.svg";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";

import classes from "./PostForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import PostFormValues from "../../../models/forms/PostFormValues";
import postValidationSchema from "../../../validations/postValidationSchema";
import PicturePost from "../PicturePost/PicturePost";
import { useDispatch } from "react-redux";
import { addPost } from "../../../store/actions/post-actions";

const postFormInitialValues: PostFormValues = {
  content: "",
  images: [],
};

const PostForm: React.FC = () => {
  const dispatch = useDispatch();
  const [postImages, setPostImages] = useState([] as string[]);
  const inputFile = useRef<HTMLInputElement>(null);

  const openFileExplorerHandler = () => {
    inputFile.current?.click();
  };

  const uploadImageHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files!;
    let base64s: string[] = [];
    for (let i = 0; i < files.length; ++i) {
      const file = files[i];
      base64s.push(await convertBlobToBase64(file));
    }
    setPostImages(base64s);
  };

  // const hasPicture: boolean = postImages.length !== 0;

  const { id } = useParams();
  const navigate = useNavigate();
  const submitHandler = (formValues: PostFormValues) => {
    navigate("/profile/" + id + "/posts");
    dispatch(addPost(formValues));
  };

  // const styles = {
  //   image: {
  //     backgroundImage: `url(${defaultProfileImage})`,
  //   },
  // };

  return (
    <Formik
      initialValues={postFormInitialValues}
      validationSchema={postValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit, setFieldValue }) => (
        <div className={classes["sing-up-form"]}>
          <h1 className={classes.label}>Create Post</h1>
          <div className={classes.fields}>
            <Field
              component={PrimaryTextArea}
              placeholder="Content"
              type="text"
              name="content"
              value="content"
            />
            <div className={classes["center"]}>
              {/* <div
              className={classes["picture"]}
              style={styles.image}
              onClick={openFileExplorerHandler}
            > */}
              Add images:
              <div
                className={classes["upload"]}
                onClick={openFileExplorerHandler}
              >
                <UploadIcon />
              </div>
              {/* </div> */}
            </div>
            <PicturePost pictures={postImages} />
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={inputFile}
            className={classes["upload-file-input"]}
            onChange={(event) => {
              setFieldValue("images", event.currentTarget.files!);
              uploadImageHandler(event);
            }}
            name="images"
          />
          <div className={classes.button}>
            <PrimaryButton
              text="Create"
              onClickHandler={handleSubmit}
              isSubmit
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PostForm;
