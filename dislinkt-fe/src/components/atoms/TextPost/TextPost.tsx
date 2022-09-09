import { Fragment } from "react";
import classes from "./TextPost.module.css";

interface TextPostProps {
  name: string;
  surname: string;
  username: string;
  timestamp: Date;
  content: string;
  imageSize: string;
  hasBody: boolean;
}

const TextPost: React.FC<TextPostProps> = ({
  name,
  surname,
  username,
  timestamp,
  content,
  imageSize,
  hasBody,
}) => {
  return (
    <Fragment>
      <div className={classes["post-header"]}>
        <div
          className={classes["post-header-image"]}
          style={{ width: imageSize, height: imageSize }}
        />
        <span className={classes["full-name"]}>
          <b>
            {name} {surname}
          </b>
        </span>
        <span className={classes["username"]}>{username}</span>
        <span className={classes["dot"]}>&#8226;</span>
        <span className={classes["date"]}> {timestamp.toLocaleString()}</span>
      </div>
      {hasBody && <div className={classes["post-body"]}>{content}</div>}
    </Fragment>
  );
};

export default TextPost;
