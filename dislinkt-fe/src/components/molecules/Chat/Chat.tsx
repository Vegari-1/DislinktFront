import Message from "../../atoms/Message/Message";
import classes from "./Chat.module.css";

const Chat: React.FC = () => {
  return (
    <section className={classes["chat"]}>
      <div className={classes["header-chat"]}>
        <p className={classes["name"]}>Megan Leib</p>
      </div>
      <div className={classes["messages-chat"]}>
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
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
        <Message text="Great how are you?" response />
      </div>
      <div className={classes["footer-chat"]}>
        <input
          type="text"
          className={classes["write-message"]}
          placeholder="Type your message here"
        ></input>
        <div className={classes["send"]} />
      </div>
    </section>
  );
};

export default Chat;
