import ProfileInfoData from "../../../models/data/ProfileInfoData";
import classes from "./ProfileInfo.module.css";

interface ProfileInfoProps {
  profile: ProfileInfoData;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  return (
    <div className={classes["profile"]}>
      <div className={classes["profile-header"]}>
        <div className={classes["profile-header-cover"]} />
        <div className={classes["profile-header-image"]}>
          <div className={classes["profile-image"]} />
        </div>
      </div>
      <div>
        <div className={classes["full-name"]}>
          <b>
            {profile.name} {profile.surname}
          </b>
          <span className={classes["username"]}>{profile.username}</span>
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
    </div>
  );
};

export default ProfileInfo;
