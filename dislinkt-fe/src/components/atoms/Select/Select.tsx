import FormikField from "../../../models/formik/FormikField";
import FormikForm from "../../../models/formik/FormikForm";
import classes from "./Select.module.css";

interface SelectProps {
  field: FormikField;
  form: FormikForm;
  placeholder: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  placeholder,
  options,
}) => {
  const shouldDisplayError = errors[name] && touched[name];

  return (
    <div className={classes["select-field-wrapper"]}>
      <div className={classes["select-wrapper"]}>
        <select
          className={`${classes["select-field"]} ${
            shouldDisplayError
              ? classes["select-field-error"]
              : classes["select-field-no-error"]
          }`}
          placeholder={placeholder}
          name={name}
          value={value as string}
          onChange={(e) => {
            setFieldTouched(name, true);
            onChange(name)(e.target.value);
          }}
          onBlur={() => {
            setFieldTouched(name, true);
            onBlur(name);
          }}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <span className={classes["select-error-span"]}>
        {shouldDisplayError ? errors[name] : ""}
      </span>
    </div>
  );
};

export default Select;
