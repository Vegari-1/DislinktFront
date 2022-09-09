import { Field, Formik } from "formik";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import ToggleButton from "../../atoms/ToggleButton/ToggleButton";

import classes from "./SettingsForm.module.css";
import { useNavigate } from "react-router-dom";
import SettingsFormValues from "../../../models/forms/SettingsFormValues";
import { useDispatch } from "react-redux";
import { updateNotifications } from "../../../store/actions/notification-actions";

interface SettingsFormProps {
  notifications: SettingsFormValues;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ notifications }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (formValues: SettingsFormValues) => {
    dispatch(updateNotifications(formValues));
    navigate("/profile/id_ulogovanog_korisnika");
  };

  const settingsFormInitialValues: SettingsFormValues = {
    messages: notifications.messages,
    connections: notifications.connections,
    posts: notifications.posts,
  };

  return (
    <Formik
      enableReinitialize
      initialValues={settingsFormInitialValues}
      onSubmit={submitHandler}
    >
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
