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
  const onBlockButtonClick = () => {
    console.log("block the profile");
  };
  const onLinkButtonClick = () => {
    console.log("connect to profile");
  };
  const onDislinkButtonClick = () => {
    console.log("disconnect from profile");
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
        {/* ako je profile.id=ulogovani.id onda prikazi edit dugme */}
        {/* ako profile.id!=ulogovani.id prikazi "Block", "Link"/"Dislink" dugmad */}
        {/* AKO JE NALOG BLOKIRAN, NIGDE NE MOZES DA GA NADJES VISE -> uslov u pregledu svih profila i u porukama ako ih je ranije bilo */}

        <div className={classes["actions"]}>
          <button
            className={classes["block-button"]}
            onClick={onBlockButtonClick}
          >
            Block
          </button>
          {profile.following && (
            <button
              className={classes["action-button"]}
              onClick={onDislinkButtonClick}
            >
              Dislink
            </button>
          )}
          {!profile.following && (
            <button
              className={classes["action-button"]}
              onClick={onLinkButtonClick}
            >
              Link
            </button>
          )}
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
