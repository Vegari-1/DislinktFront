import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import WorkExpFormValues from "../../../models/forms/WorkExpFormValues";
import { addWorkExperience } from "../../../store/actions/profile-actions";
import workExpValidationSchema from "../../../validations/workExpValidationSchema";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import classes from "./WorkExpFormOverlay.module.css";

interface WorkExpFormOverlayProps {
  onClose: () => void;
}

const workExpFormInitialValues: WorkExpFormValues = {
  position: "",
  company: "",
  startDate: new Date(),
};

const WorkExpFormOverlay: React.FC<WorkExpFormOverlayProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const submitHandler = (formValues: WorkExpFormValues) => {
    onClose();
    dispatch(addWorkExperience(formValues));
  };

  return (
    <div className={classes["modal-wrapper"]}>
      <div className={classes["modal"]}>
        <div className={classes["top-border-color"]}></div>
        <div className={classes["content"]}>
          <Formik
            initialValues={workExpFormInitialValues}
            validationSchema={workExpValidationSchema}
            onSubmit={submitHandler}
          >
            {({ handleSubmit }) => (
              <div>
                <h2>Create Work Experience Info</h2>
                <Field
                  component={PrimaryInputField}
                  text="Position"
                  type="text"
                  name="position"
                  value="position"
                />
                <Field
                  component={PrimaryInputField}
                  text="Company"
                  type="text"
                  name="company"
                  value="company"
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

export default WorkExpFormOverlay;
