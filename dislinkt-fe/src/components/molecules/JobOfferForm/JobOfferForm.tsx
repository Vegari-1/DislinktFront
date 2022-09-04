import { Field, Formik } from "formik";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import PrimaryTextArea from "../../atoms/PrimaryTextArea/PrimaryTextArea";

import classes from "./JobOfferForm.module.css";
import { useNavigate } from "react-router-dom";
import JobOfferFormValues from "../../../models/forms/JobOfferFormValues";
import jobOfferValidationSchema from "../../../validations/jobOfferValidationSchema";

const jobOfferFormInitialValues: JobOfferFormValues = {
  positionName: "",
  description: "",
  qualifications: [],
  qualificationsCombined: "",
};

const JobOfferForm: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const submitHandler = (formValues: JobOfferFormValues) => {
    formValues.qualifications = formValues.qualificationsCombined
      .split(",")
      .map((qual) => qual.trim());
    // dispatch()
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
