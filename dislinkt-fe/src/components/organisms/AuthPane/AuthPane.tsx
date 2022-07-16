import AuthOverlay from "../../molecules/AuthOverlay/AuthOverlay";
import SignInForm from "../../molecules/SignInForm/SignInForm";
import classes from "./AuthPane.module.css";

const AuthPane: React.FC = () => {
  return (
    <div className={classes.background}>
      <div className={classes["left-panel"]}>
        <SignInForm />
      </div>
      <div className={classes["right-panel"]}>
        <AuthOverlay />
      </div>
    </div>
  );
};

export default AuthPane;
