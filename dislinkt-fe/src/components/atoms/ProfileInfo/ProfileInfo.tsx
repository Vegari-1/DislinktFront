import { useNavigate } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
import { ReactComponent as PrivateIcon } from "../../../assets/svg/lock.svg";
import { ReactComponent as PublicIcon } from "../../../assets/svg/open-lock.svg";
import ProfileInfoData from "../../../models/data/ProfileInfoData";
import IconButton from "../IconButton/IconButton";
import classes from "./ProfileInfo.module.css";

interface ProfileInfoProps {
  profile: ProfileInfoData;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  const navigate = useNavigate();
  const onEditButtonClick = () => {
    navigate("info");
  };

  return (
    <div className={classes["profile"]}>
      <div className={classes["profile-header"]}>
        <div className={classes["profile-header-cover"]} />
        <div className={classes["profile-header-image"]}>
          <div className={classes["profile-image"]} />
        </div>
      </div>
      <div className={classes["profile-content"]}>
        <div className={classes["content"]}>
          <div className={classes["full-name"]}>
            {profile.public ? (
              <PublicIcon height={20} width={20} />
            ) : (
              <PrivateIcon height={20} width={20} />
            )}
            <b>
              {"   "} {profile.name} {profile.surname}
            </b>
            <span className={classes["username"]}>@{profile.username}</span>
          </div>
          <div className={classes["info"]}>
            {"Email: "}
            {profile.email}
            <span className={classes["dot"]}>&#8226;</span>
            {"Phone: "}
            {profile.phone}
          </div>
          <div className={classes["info"]}>
            {"Birthdate: "}
            {profile.dateOfBirth.toLocaleDateString()}
            <span className={classes["dot"]}>&#8226;</span>
            {"Gender: "}
            {profile.gender}
          </div>
          <div className={classes["info"]}>{profile.info}</div>
        </div>

        <div className={classes["edit-button"]}>
          <IconButton
            icon={<EditIcon width={30} height={30} />}
            onClick={onEditButtonClick}
            color={"--SECONDARY-COLOR-LIGHTER"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
