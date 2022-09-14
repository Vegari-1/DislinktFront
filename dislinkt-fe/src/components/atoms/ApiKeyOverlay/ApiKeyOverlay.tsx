import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import classes from "./ApiKeyOverlay.module.css";

interface ApiKeyOverlayProps {
  onClose: () => void;
}

const ApiKeyOverlay: React.FC<ApiKeyOverlayProps> = ({ onClose }) => {
  const apiKey = useSelector((state: RootState) => state.profile.apiKey);

  return (
    <div className={classes["modal-wrapper"]}>
      <div className={classes["modal"]}>
        <div className={classes["top-border-color"]}></div>
        <div className={classes["content"]}>
          <h2>API Key</h2>
          <div className={classes["text"]}>
            Please safely store your key because this is the only time it will
            be shown.
          </div>
          <p>{apiKey}</p>
          <div className={classes["action-buttons"]}>
            <button className={classes["cancel-button"]} onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyOverlay;
