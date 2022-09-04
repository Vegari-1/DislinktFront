import Message from "../../atoms/Message/Message";
import classes from "./Chat.module.css";

const Chat: React.FC = () => {
  return (
    <div className={classes["chat"]}>
      <div className={classes["header-chat"]}>
        <p className={classes["name"]}>Megan Leib</p>
      </div>
      <div className={classes["messages-chat"]}>
        <Message text="Hello how are you?" />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Hello how are you?" />
        <Message text="Great how are you?" response />
        <Message text="Hello how are you?" />
        <Message text="Hello how are you?" />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Last message" response />
      </div>
      <div className={classes["footer-chat"]}>
        <textarea
          className={classes["write-message"]}
          placeholder="Type your message here"
        ></textarea>
        <div className={classes["send"]} />
      </div>
    </div>
  );
};

export default Chat;
