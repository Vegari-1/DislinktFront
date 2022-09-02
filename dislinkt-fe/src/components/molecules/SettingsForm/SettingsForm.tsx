import { Field, Formik } from "formik";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import ToggleButton from "../../atoms/ToggleButton/ToggleButton";

import classes from "./SettingsForm.module.css";
import { useNavigate } from "react-router-dom";
import SettingsFormValues from "../../../models/forms/SettingsFormValues";

const settingsFormInitialValues: SettingsFormValues = {
  messages: false,
  connections: false,
  posts: false,
};

const SettingsForm: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const submitHandler = (formValues: SettingsFormValues) => {
    // samo posalji na bek novu konfiguraciju i redirektuj nazad na profil
    // (moze ovde redirekcija jer se ne vide na profilu podesavanja)
    console.log(formValues);
    navigate("/profile");
  };

  return (
    <Formik initialValues={settingsFormInitialValues} onSubmit={submitHandler}>
      {({ handleSubmit }) => (
        <div className={classes["sing-up-form"]}>
          <h1 className={classes.label}>Notification Settings</h1>
          <div className={classes.fields}>
            <div className={classes["form-row"]}>
              <span className={classes["toggle-label"]}>
                Message notifications:
              </span>
              <Field
                component={ToggleButton}
                activeLabel="On"
                inactiveLabel="Off"
                name="messages"
                value="messages"
              />
            </div>
            <div className={classes["form-row"]}>
              <span className={classes["toggle-label"]}>
                Connections notifications:
              </span>
              <Field
                component={ToggleButton}
                activeLabel="On"
                inactiveLabel="Off"
                name="connections"
                value="connections"
              />
            </div>
            <div className={classes["form-row"]}>
              <span className={classes["toggle-label"]}>
                Posts notifications:
              </span>
              <Field
                component={ToggleButton}
                activeLabel="On"
                inactiveLabel="Off"
                name="posts"
                value="posts"
              />
            </div>
          </div>
          <div className={classes.button}>
            <PrimaryButton text="Save" onClickHandler={handleSubmit} isSubmit />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SettingsForm;
