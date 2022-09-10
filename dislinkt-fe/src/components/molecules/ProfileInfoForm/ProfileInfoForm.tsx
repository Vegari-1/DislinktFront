import { Field, Formik } from "formik";
import registerValidationSchema from "../../../validations/registerValidationSchema";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";
import Select from "../../atoms/Select/Select";
import ToggleButton from "../../atoms/ToggleButton/ToggleButton";

import classes from "./ProfileInfoForm.module.css";
import { useNavigate } from "react-router-dom";
import ProfileInfoFormValues from "../../../models/forms/ProfileInfoFormValues";
import { useDispatch } from "react-redux";
import { saveProfile } from "../../../store/actions/profile-actions";

interface ProfileInfoFormProps {
  id: string;
  email: string;
  username: string;
  name: string;
  surname: string;
  gender: string;
  dateOfBirth: Date;
  phone: string;
  publicProfile: boolean;
  biography: string;
}

const GENDER_OPTIONS = ["Other", "Female", "Male"];

const ProfileInfoForm: React.FC<ProfileInfoFormProps> = ({
  id,
  email,
  username,
  name,
  surname,
  gender,
  dateOfBirth,
  phone,
  publicProfile,
  biography,
}) => {
  const profileInfoFormInitialValues: ProfileInfoFormValues = {
    email: email,
    username: username,
    name: name,
    surname: surname,
    gender: gender,
    dateOfBirth: dateOfBirth.toLocaleDateString("en-CA"),
    phone: phone,
    public: publicProfile,
    biography: biography,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (formValues: ProfileInfoFormValues) => {
    dispatch(saveProfile(formValues));
    navigate("/profile/" + id);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={profileInfoFormInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-up-form"]}>
          <h1 className={classes.label}>Edit profile info</h1>
          <div className={classes.fields}>
            <div className={classes["form-row"]}>
              <Field
                component={PrimaryInputField}
                text="Email"
                type="text"
                name="email"
                value="email"
              />
              <Field
                component={PrimaryInputField}
                text="Username"
                type="text"
                name="username"
                value="username"
              />
            </div>
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
          <div className={classes.button}>
            <PrimaryButton text="Save" onClickHandler={handleSubmit} isSubmit />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ProfileInfoForm;
