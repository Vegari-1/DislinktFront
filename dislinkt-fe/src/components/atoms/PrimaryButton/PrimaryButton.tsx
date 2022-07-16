import classes from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  text: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClickHandler,
}) => {
  return (
    <button className={classes["primary-button"]} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default PrimaryButton;
