import classes from "./ProfileMenu.module.css";
import ProfileMenuItem from "../../atoms/ProfileMenuItem/ProfileMenuItem";

interface ProfileMenuProps {
  menuItems: any[];
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ menuItems }) => {
  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes["header-menu"]}>
        {menuItems?.map((menuItem) => (
          <ProfileMenuItem
            key={menuItem.text}
            text={menuItem.text}
            link={menuItem.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileMenu;
