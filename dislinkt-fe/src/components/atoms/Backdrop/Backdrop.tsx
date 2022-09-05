import classes from "./Backdrop.module.css";

interface BackdropProps {
  onBackdropClick: () => void;
  blur?: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({ onBackdropClick, blur }) => {
  return (
    <div
      className={`${classes.backdrop} ${blur && classes["backdrop-blur"]}`}
      onClick={onBackdropClick}
    />
  );
};

export default Backdrop;
