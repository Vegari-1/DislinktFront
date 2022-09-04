import { useNavigate } from "react-router-dom";
import classes from "./SidebarHeader.module.css";

const SidebarHeader: React.FC = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/home");
  };

  return (
    <div className={classes["side-bar-header-wrapper"]}>
      <div className={classes["logo"]} onClick={onClickHandler} />
      <span className={classes["logo-title"]}>Dislinkt</span>
    </div>
  );
};

export default SidebarHeader;
