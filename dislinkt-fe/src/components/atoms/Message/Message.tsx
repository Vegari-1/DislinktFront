import classes from "./Message.module.css";

interface MessageProps {
  text: string;
  response?: boolean;
}

const Message: React.FC<MessageProps> = ({ text, response = false }) => {
  return (
    <div className={classes["message"]}>
      {!response && <div className={classes["photo"]} />}
      <p className={`${classes["text"]} ${response && classes["response"]}`}>
        {text}
      </p>
    </div>
  );
};

export default Message;
