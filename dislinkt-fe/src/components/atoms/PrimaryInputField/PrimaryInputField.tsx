import classes from "./PrimaryInputField.module.css";

interface PrimaryInputFieldProps {
  text: string;
  type: string;
}

const PrimaryInputField: React.FC<PrimaryInputFieldProps> = ({
  text,
  type,
}) => {
  return (
    <input
      placeholder={text}
      type={type}
      className={classes["primary-input-field"]}
    />
  );
};

export default PrimaryInputField;
