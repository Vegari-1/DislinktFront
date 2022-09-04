import { Fragment } from "react";
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
  // dodati sliku
  picture,
  response = false,
  firstMessage = false,
}) => {
  return (
    <Fragment>
      <div className={classes["message"]}>
        {!response && firstMessage && <div className={classes["photo"]} />}
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
        {timestamp.toLocaleString()}
      </div>
    </Fragment>
  );
};

export default Message;
