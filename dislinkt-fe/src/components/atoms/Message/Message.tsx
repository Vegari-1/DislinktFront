import { Fragment } from "react";
import moment from "moment"
import classes from "./Message.module.css";

interface MessageProps {
  text: string;
  timestamp: Date;
  picture?: string;
  response?: boolean;
  firstMessage?: boolean;
}

const Message: React.FC<MessageProps> = ({
  text,
  timestamp,
  picture,
  response = false,
  firstMessage = false,
}) => {
  return (
    <Fragment>
      <div className={classes["message"]}>
        {!response && firstMessage && (
          <div
            className={classes["photo"]}
            style={{ backgroundImage: `url(${picture})` }}
          />
        )}
        <p
          className={`${classes["text"]} ${
            !firstMessage && classes["text-only"]
          } ${response && classes["response"]}`}
        >
          {text}
        </p>
      </div>
      <div
        className={`${classes["time"]} ${response && classes["response-time"]}`}
      >
        {moment(timestamp).fromNow()}
      </div>
    </Fragment>
  );
};

export default Message;
