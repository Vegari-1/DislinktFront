import classes from "./NotFoundPane.module.css";

import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";

const NotFoundPane: React.FC = () => {
  const navigate = useNavigate();

  const onGoToLoginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/auth");
  };

  return (
    <div className={classes["center-div"]}>
      <div className={classes["picture-holder"]} />
      <div className={classes["button-holder"]}>
        <PrimaryButton text="Go to Login" onClickHandler={onGoToLoginHandler} />
      </div>
    </div>
  );
};

export default NotFoundPane;
