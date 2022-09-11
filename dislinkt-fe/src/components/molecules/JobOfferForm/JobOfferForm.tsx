import { Field, Formik } from "formik";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";
import ProfileInfoData from "../../../models/data/ProfileInfoData";

import classes from "./JobOfferForm.module.css";
import { useNavigate } from "react-router-dom";
import JobOfferFormValues from "../../../models/forms/JobOfferFormValues";
import jobOfferValidationSchema from "../../../validations/jobOfferValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { addJobOffer } from "../../../store/actions/jof-offer-actions";
import { RootState } from "../../../store/store";
import { UserDataPayload } from "../../../models/slices/auth";

const jobOfferFormInitialValues: JobOfferFormValues = {
  positionName: "",
  description: "",
  companyLink: "",
  qualifications: [],
  qualificationsCombined: "",
};

const JobOfferForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );
  const profileData: ProfileInfoData = useSelector(
    (state: RootState) => state.profile.profile
  );
  const submitHandler = (formValues: JobOfferFormValues) => {
    formValues.qualifications = formValues.qualificationsCombined
      .split(",")
      .map((qual) => qual.trim());
    formValues.profile = {
      globalId: userData.id,
      name: userData.name,
      surname: userData.surname,
      avatar: profileData.picture,
    };
    dispatch(addJobOffer(formValues));
    navigate("/job-offers");
  };

  return (
    <Formik
      initialValues={jobOfferFormInitialValues}
      validationSchema={jobOfferValidationSchema}
      onSubmit={submitHandler}
    >
      {({ handleSubmit }) => (
        <div className={classes["sing-up-form"]}>
          <h1 className={classes.label}>Create Job Offer</h1>

          <div className={classes.fields}>
            <Field
              component={PrimaryInputField}
              text="Position"
              type="text"
              name="positionName"
              value="position"
            />
            <Field
              component={PrimaryTextArea}
              placeholder="Description"
              type="text"
              name="description"
              value="description"
            />
            <Field
              component={PrimaryInputField}
              text="Company link"
              type="text"
              name="companyLink"
              value="companyLink"
            />
            <Field
              component={PrimaryInputField}
              text="Qualifications (seperated by ',')"
              type="text"
              name="qualificationsCombined"
              value="qualificationsCombined"
            />
          </div>
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

export default JobOfferForm;
