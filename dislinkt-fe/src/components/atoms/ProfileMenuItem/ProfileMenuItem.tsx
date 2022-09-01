import { NavLink } from "react-router-dom";
import classes from "./ProfileMenuItem.module.css";

interface ProfileMenuItemProps {
  text: string;
  link: string;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ text, link }) => {
  const activeStyle = {
    background: "#efaa85",
  };

  return (
    <div className={classes["header-item"]}>
      <NavLink
        end
        to={link}
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className={classes["header-link"]}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default ProfileMenuItem;
