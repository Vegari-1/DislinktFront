import { useEffect, useRef } from "react";
import { ReactComponent as SendIcon } from "../../../assets/svg/send.svg";
import Message from "../../atoms/Message/Message";
import classes from "./Chat.module.css";

interface ChatProps {
  name: string;
  surname: string;
  picture: string;
  messages: [];
}

const Chat: React.FC<ChatProps> = ({ name, surname, picture, messages }) => {
  const bottomDiv = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    bottomDiv.current?.scrollIntoView();
  }, []);

  return (
    <div className={classes["chat"]}>
      <div className={classes["header-chat"]}>
        <p className={classes["name"]}>{`${name} ${surname}`}</p>
      </div>
      <div className={classes["messages-chat"]}>
        <Message
          text="Hello how are you?"
          timestamp={new Date()}
          firstMessage
        />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message
          text="Hello how are you?"
          timestamp={new Date()}
          firstMessage
        />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message
          text="Hello how are you?"
          timestamp={new Date()}
          firstMessage
        />
        <Message text="Hello how are you?" timestamp={new Date()} />
        <Message text="Hello how are you?" timestamp={new Date()} />
        <Message text="Hello how are you?" timestamp={new Date()} />
        <Message text="Hello how are you?" timestamp={new Date()} />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Great how are you?" timestamp={new Date()} response />
        <Message text="Last message" timestamp={new Date()} response />

        {/* scroll to end of chat div */}
        <div ref={bottomDiv} />
      </div>
      <div className={classes["footer-chat"]}>
        <textarea
          className={classes["write-message"]}
          placeholder="Type a message..."
        ></textarea>
        <div className={classes["send"]}>
          <SendIcon height={25} width={25} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
