import RegisterForm from "../../molecules/RegisterForm/RegisterForm";
import classes from "./RegisterPane.module.css";

const RegisterPane: React.FC = () => {
  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["container"]}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPane;
