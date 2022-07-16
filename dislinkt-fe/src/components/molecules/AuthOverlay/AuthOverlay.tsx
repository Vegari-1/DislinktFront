import classes from "./AuthOverlay.module.css";

const AuthOverlay = () => {
  return (
    <div className={classes["overlay-container"]}>
      <div className={classes["overlay"]}></div>
    </div>
  );
};

export default AuthOverlay;
