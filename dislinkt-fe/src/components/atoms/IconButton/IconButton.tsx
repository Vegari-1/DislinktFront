import { ReactElement } from "react";
import classes from "./IconButton.module.css";

interface IconButtonProps {
  icon: ReactElement;
  onClick: () => void;
  boxShadow?: boolean;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  boxShadow = false,
  color = "--PRIMARY-COLOR-LIGHTER",
}) => {
  const colorStyle = {
    button: {
      background: `var(${color})`,
    },
  };
  const boxShadowStyle = {
    button: {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      background: `var(${color})`,
    },
  };

  return (
    <button
      className={classes["icon-button"]}
      style={boxShadow ? boxShadowStyle.button : colorStyle.button}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
