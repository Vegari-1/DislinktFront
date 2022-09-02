import { Fragment, ReactNode } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/svg/plus.svg";
import ProfileInfoData from "../../../models/data/ProfileInfoData";
import IconButton from "../../atoms/IconButton/IconButton";
import ProfileInfo from "../../atoms/ProfileInfo/ProfileInfo";
import ProfileMenu from "../../molecules/ProfileMenu/ProfileMenu";
import classes from "./ProfilePane.module.css";

interface ProfilePaneProps {
  onAddButtonClick?: () => void;
  children?: ReactNode;
}

const ProfilePane: React.FC<ProfilePaneProps> = ({
  onAddButtonClick,
  children,
}) => {
  const profile: ProfileInfoData = {
    name: "Ksenija",
    surname: "Prcic",
    username: "resetKsenija",
    email: "ksenija@ksenija.com",
    gender: "Female",
    dateOfBirth: new Date(),
    phone: "392055235",
    info: "I am a robot human hybrid sent to this planet to investigate.",
    public: false,
    picture: "picture",
  };
  return (
    <Fragment>
      <ProfileInfo profile={profile} />
      <ProfileMenu
        menuItems={[
          { text: "Skills", link: "/profile" },
          { text: "Work experience", link: "/profile/work" },
          { text: "Education", link: "/profile/edu" },
          { text: "Posts", link: "/profile/posts" },
        ]}
      />
      {children}
      <div className={classes["add-button"]}>
        <IconButton icon={<PlusIcon />} boxShadow onClick={onAddButtonClick!} />
      </div>
    </Fragment>
  );
};

export default ProfilePane;
