import { ReactElement } from "react";

import classes from "./IconButton.module.css";

interface IconButtonProps {
  icon: ReactElement;
  text: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {
  return (
    <div className={classes["icon-button"]}>
      {icon}
      <span className={classes["text"]}>{text}</span>
    </div>
  );
};

export default IconButton;
