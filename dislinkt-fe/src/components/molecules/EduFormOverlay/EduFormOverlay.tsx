import { Field, Formik } from "formik";
import EduFormValues from "../../../models/forms/EduFormValues";
import eduValidationSchema from "../../../validations/eduValidationSchema";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import classes from "./EduFormOverlay.module.css";

interface EduFormOverlayProps {
  onClose: () => void;
}

const eduFormInitialValues: EduFormValues = {
  school: "",
  degree: "",
  field: "",
  startDate: new Date(),
  endDate: new Date(),
};

const EduFormOverlay: React.FC<EduFormOverlayProps> = ({ onClose }) => {
  const submitHandler = (formValues: EduFormValues) => {
    onClose();
    // dodaj edu
    console.log(formValues);
    console.log("dodaj edu");
  };

  return (
    <div className={classes["modal-wrapper"]}>
      <div className={classes["modal"]}>
        <div className={classes["top-border-color"]}></div>
        <div className={classes["content"]}>
          <Formik
            initialValues={eduFormInitialValues}
            validationSchema={eduValidationSchema}
            onSubmit={submitHandler}
          >
            {({ handleSubmit }) => (
              <div>
                <h2>Create Education Info</h2>
                <Field
                  component={PrimaryInputField}
                  text="School"
                  type="text"
                  name="school"
                  value="school"
                />
                <Field
                  component={PrimaryInputField}
                  text="Degree"
                  type="text"
                  name="degree"
                  value="degree"
                />
                <Field
                  component={PrimaryInputField}
                  text="Field"
                  type="text"
                  name="field"
                  value="field"
                />
                <div className={classes["form-row"]}>
                  <Field
                    component={PrimaryInputField}
                    text="Start Date"
                    type="date"
                    name="startDate"
                    value="startDate"
                  />
                  <Field
                    component={PrimaryInputField}
                    text="End Date"
                    type="date"
                    name="endDate"
                    value="endDate"
                  />
                </div>
                <div className={classes["action-buttons"]}>
                  <button
                    className={classes["cancel-button"]}
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    className={classes["create-button"]}
                    onClick={() => handleSubmit()}
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EduFormOverlay;
