import FormikField from "../../../models/formik/FormikField";
import FormikForm from "../../../models/formik/FormikForm";
import classes from "./ToggleButton.module.css";

interface ToggleButtonProps {
  field: FormikField;
  form: FormikForm;
  activeLabel: string;
  inactiveLabel: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched, setFieldValue },
  activeLabel,
  inactiveLabel,
}) => {
  return (
    <div className={classes["toggle-button-wrapper"]}>
      <span className={classes["label"]}>{inactiveLabel}</span>
      <input
        className={classes["toggle-input"]}
        type="checkbox"
        id="switch"
        name={name}
        value={value as string}
        onChange={(e) => {
          setFieldTouched(name, true);
          setFieldValue(name, e.target.checked);
        }}
        onBlur={() => {
          setFieldTouched(name, true);
          onBlur(name);
        }}
      />
      <label className={classes["toggle-label"]} htmlFor="switch"></label>
      <span className={classes["label-active"]}>{activeLabel}</span>
    </div>
  );
};

export default ToggleButton;
