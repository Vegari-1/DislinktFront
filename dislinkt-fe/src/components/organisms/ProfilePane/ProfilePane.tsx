import { Fragment, ReactNode } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReactComponent as PlusIcon } from "../../../assets/svg/plus.svg";
import ProfileInfoData from "../../../models/data/ProfileInfoData";
import { RootState } from "../../../store/store";
import IconButton from "../../atoms/IconButton/IconButton";
import ProfileInfo from "../../atoms/ProfileInfo/ProfileInfo";
import ProfileMenu from "../../molecules/ProfileMenu/ProfileMenu";
import classes from "./ProfilePane.module.css";

interface ProfilePaneProps {
  profile: ProfileInfoData;
  onAddButtonClick: () => void;
  children?: ReactNode;
}

const ProfilePane: React.FC<ProfilePaneProps> = ({
  profile,
  onAddButtonClick,
  children,
}) => {
  const { id } = useParams();
  const userData = useSelector((state: RootState) => state.auth.userData);

  return (
    <Fragment>
      <ProfileInfo profile={profile} />
      {(profile.public || profile.following || userData.id === id) && (
        <ProfileMenu
          menuItems={[
            { text: "Skills", link: "/profile/" + id },
            { text: "Work experience", link: "/profile/" + id + "/work" },
            { text: "Education", link: "/profile/" + id + "/edu" },
            { text: "Posts", link: "/profile/" + id + "/posts" },
          ]}
        />
      )}

      {(profile.public || profile.following || userData.id === id) && children}

      {!profile.public && !profile.following && userData.id !== id && (
        <div className={classes["private"]}>
          <div className={classes["private-title"]}>
            This Profile is Private
          </div>
          <div>Link with this profile to view more content</div>
        </div>
      )}

      {userData.id === id && (
        <div className={classes["add-button"]}>
          <IconButton
            icon={<PlusIcon />}
            boxShadow
            onClick={onAddButtonClick!}
          />
        </div>
      )}
    </Fragment>
  );
};

export default ProfilePane;
