import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import SkillFormValues from "../../../models/forms/SkillFormValues";
import { addSkill } from "../../../store/actions/profile-actions";
import skillValidationSchema from "../../../validations/skillValidationSchema";
import PrimaryInputField from "../../atoms/PrimaryInputField/PrimaryInputField";
import classes from "./SkillFormOverlay.module.css";

interface SkillFormOverlayProps {
  onClose: () => void;
}

const skillFormInitialValues: SkillFormValues = {
  name: "",
};

const SkillFormOverlay: React.FC<SkillFormOverlayProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const submitHandler = (formValues: SkillFormValues) => {
    onClose();
    dispatch(addSkill(formValues));
  };

  return (
    <div className={classes["modal-wrapper"]}>
      <div className={classes["modal"]}>
        <div className={classes["top-border-color"]}></div>
        <div className={classes["content"]}>
          <Formik
            initialValues={skillFormInitialValues}
            validationSchema={skillValidationSchema}
            onSubmit={submitHandler}
          >
            {({ handleSubmit }) => (
              <div>
                <h2>Create Skill Info</h2>
                <div>
                  <Field
                    component={PrimaryInputField}
                    text="Skill name"
                    type="text"
                    name="name"
                    value="name"
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

export default SkillFormOverlay;
