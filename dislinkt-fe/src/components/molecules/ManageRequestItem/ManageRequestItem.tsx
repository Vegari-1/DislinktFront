import { useState } from "react";
import defaultPicture from "../../../assets/images/no-picture.png";
import { ReactComponent as AcceptIcon } from "../../../assets/svg/done.svg";
import { ReactComponent as DeclineIcon } from "../../../assets/svg/close.svg";

import classes from "./ManageRequestItem.module.css";

interface ManageRequestItemProps {
  id: string;
  fullName: string;
  username: string;
  acceptRequest: (id: string) => void;
  declineRequest: (id: string) => void;
  picture?: string;
}

const BASE64_IMAGE_PREFIX = "data:image/gif;base64,";

const ManageRequestItem: React.FC<ManageRequestItemProps> = ({
  id,
  fullName,
  username,
  picture,
  acceptRequest,
  declineRequest,
}) => {
  const [confirmDecline, setConfirmDecline] = useState(false);

  const acceptHanlder = () => {
    acceptRequest(id);
  };

  const declineHandler = () => {
    setConfirmDecline(!confirmDecline);
  };

  const confirmDeclineHandler = () => {
    declineRequest(id);
  };

  const hasPicture: boolean = !(picture === BASE64_IMAGE_PREFIX);
  const styles = {
    image: {
      backgroundImage: `url(${hasPicture ? picture : defaultPicture})`,
    },
  };

  return (
    <div className={classes["manage-request-item-wrapper"]}>
      <div
        className={`${classes["manage-request-item"]} ${
          confirmDecline && classes["blur"]
        }`}
      >
        <div className={classes["picture"]} style={styles.image} />
        <span className={classes["full-name"]}>{fullName}</span>
        <span className={classes["username"]}>{`@${username}`}</span>
        <div className={classes["actions"]}>
          <AcceptIcon
            width={25}
            height={25}
            cursor="pointer"
            onClick={acceptHanlder}
          />
          <span className={classes["space"]} />
          <DeclineIcon
            width={25}
            height={25}
            cursor="pointer"
            onClick={declineHandler}
          />
        </div>
      </div>

      {confirmDecline && (
        <button
          className={classes["delete-button"]}
          onClick={confirmDeclineHandler}
        >
          Decline
        </button>
      )}
    </div>
  );
};

export default ManageRequestItem;
