import { Field, Formik } from "formik";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { convertBlobToBase64 } from "../../../helpers/convertBlobToBase64";
import { ReactComponent as UploadIcon } from "../../../assets/svg/upload.svg";
import defaultProfileImage from "../../../assets/images/no-picture.png";
import RegisterFormValues from "../../../models/forms/RegisterFormValues";
import registerValidationSchema from "../../../validations/registerValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";
import Select from "../../atoms/Select/Select";
import ToggleButton from "../../atoms/ToggleButton/ToggleButton";

import classes from "./RegisterForm.module.css";
import { register } from "../../../store/actions/auth-actions";
import { useNavigate } from "react-router-dom";

const registerFormInitialValues: RegisterFormValues = {
  name: "",
  surname: "",
  gender: "",
  dateOfBirth: new Date(),
  phone: "",
  biography: "",
  public: false,
};

const GENDER_OPTIONS = ["Other", "Female", "Male"];
const BASE64_IMAGE_PREFIX = "data:image/gif;base64,";

const RegisterForm: React.FC = () => {
  const [profileImage, setProfileImage] = useState(BASE64_IMAGE_PREFIX);
  const inputFile = useRef<HTMLInputElement>(null);

  const openFileExplorerHandler = () => {
    inputFile.current?.click();
  };

  const uploadImageHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const base64 = await convertBlobToBase64(file);
    setProfileImage(base64);
  };

  const hasPicture: boolean = !(profileImage === BASE64_IMAGE_PREFIX);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (formValues: RegisterFormValues) => {
    if (profileImage !== BASE64_IMAGE_PREFIX) {
      formValues.picture = profileImage;
    }
    dispatch(register({ formValues, navigate }));
  };

  const styles = {
    image: {
      backgroundImage: `url(${
        hasPicture ? profileImage : defaultProfileImage
      })`,
    },
  };

  return (
    <Formik
      initialValues={registerFormInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit, setFieldValue }) => (
        <div className={classes["sing-up-form"]}>
          <h1 className={classes.label}>Sign Up</h1>

          <div className={classes["center"]}>
            <div
              className={classes["picture"]}
              style={styles.image}
              onClick={openFileExplorerHandler}
            >
              {!hasPicture && (
                <div className={classes["upload"]}>
                  <UploadIcon />
                </div>
              )}
            </div>
          </div>

          <div className={classes.fields}>
            <div className={classes["form-row"]}>
              <Field
                component={PrimaryInputField}
                text="Name"
                type="text"
                name="name"
                value="name"
              />
              <Field
                component={PrimaryInputField}
                text="Surname"
                type="text"
                name="surname"
                value="surname"
              />
            </div>
            <div className={classes["form-row"]}>
              <Field
                component={PrimaryInputField}
                text="Date of Birth"
                type="date"
                name="dateOfBirth"
                value="dateOfBirth"
              />
              <Field
                component={Select}
                placeholder="Gender"
                options={GENDER_OPTIONS}
                name="gender"
                value="gender"
              />
            </div>
            <div className={classes["form-row"]}>
              <Field
                component={PrimaryInputField}
                text="Phone number"
                type="text"
                name="phone"
                value="phone"
              />
              <Field
                component={ToggleButton}
                activeLabel="Public"
                inactiveLabel="Private"
                name="public"
                value="public"
              />
            </div>
            <Field
              component={PrimaryTextArea}
              placeholder="Biography"
              type="text"
              name="biography"
              value="biography"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={inputFile}
            className={classes["upload-file-input"]}
            onChange={(event) => {
              setFieldValue("picture", event.currentTarget.files![0]);
              uploadImageHandler(event);
            }}
            name="picture"
          />
          <div className={classes.button}>
            <PrimaryButton
              text="Sign Up"
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
