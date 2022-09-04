import { useNavigate } from "react-router-dom";
import classes from "./ProfileCard.module.css";

interface ProfileCardProps {
  id: string;
  name: string;
  surname: string;
  username: string;
  picture: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  surname,
  username,
  picture,
}) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/profile/" + id);
  };

  return (
    <div className={classes["card"]} onClick={onClickHandler}>
      <div className={classes["picture"]} />
      <div className={classes["full-name"]}>{`${name} ${surname}`}</div>
      <div className={classes["username"]}>@{username}</div>
    </div>
  );
};

export default ProfileCard;
