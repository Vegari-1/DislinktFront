import classes from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return <button className={classes.primary}>{text}</button>;
};

export default PrimaryButton;
