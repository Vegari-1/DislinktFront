import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../assets/svg/edit.svg";
import { ReactComponent as PrivateIcon } from "../../../assets/svg/lock.svg";
import { ReactComponent as PublicIcon } from "../../../assets/svg/open-lock.svg";
import ProfileInfoData from "../../../models/data/ProfileInfoData";
import {
  blockProfile,
  dislinkWithProfile,
  linkWithProfile,
} from "../../../store/actions/profile-actions";
import { RootState } from "../../../store/store";
import IconButton from "../IconButton/IconButton";
import classes from "./ProfileInfo.module.css";

interface ProfileInfoProps {
  profile: ProfileInfoData;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ profile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const userData = useSelector((state: RootState) => state.auth.userData);

  const onEditButtonClick = () => {
    navigate("/profile/" + id + "/info");
  };
  const onBlockButtonClick = () => {
    dispatch(blockProfile(profile.id));
    navigate("/people");
  };
  const onLinkButtonClick = () => {
    dispatch(linkWithProfile(profile.id));
  };
  const onDislinkButtonClick = () => {
    dispatch(dislinkWithProfile(profile.id));
  };

  return (
    <div className={classes["profile"]}>
      <div className={classes["profile-header"]}>
        <div className={classes["profile-header-cover"]} />
        <div className={classes["profile-header-image"]}>
          <div
            className={classes["profile-image"]}
            style={{ backgroundImage: `url(${profile.picture})` }}
          />
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
              {profile.name} {profile.surname}
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
          <div className={classes["info"]}>{profile.biography}</div>
        </div>

        {Object.keys(userData).length !== 0 && (
          <div className={classes["actions"]}>
            {userData.id !== id && (
              <button
                className={classes["block-button"]}
                onClick={onBlockButtonClick}
              >
                Block
              </button>
            )}
            {profile.following && userData.id !== id && (
              <button
                className={classes["action-button"]}
                onClick={onDislinkButtonClick}
              >
                Dislink
              </button>
            )}
            {!profile.following &&
              !profile.pendingFollow &&
              userData.id !== id && (
                <button
                  className={classes["action-button"]}
                  onClick={onLinkButtonClick}
                >
                  Link
                </button>
              )}
            {profile.pendingFollow && userData.id !== id && <p>Requested</p>}
          </div>
        )}

        {userData.id === id && (
          <div className={classes["edit-button"]}>
            <IconButton
              icon={<EditIcon width={30} height={30} />}
              onClick={onEditButtonClick}
              color={"--SECONDARY-COLOR-LIGHTER"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
