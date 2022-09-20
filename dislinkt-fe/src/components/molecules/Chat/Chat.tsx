import { useEffect, useRef } from "react";
import { ReactComponent as SendIcon } from "../../../assets/svg/send.svg";
import MessageData from "../../../models/data/MessageData";
import Message from "../../atoms/Message/Message";

import classes from "./Chat.module.css";

interface ChatProps {
  userId: string;
  name: string;
  surname: string;
  picture: string;
  messages: MessageData[];
  text: string;
  textChange: (text: string) => void;
  sendMessage: () => void;
}

const Chat: React.FC<ChatProps> = ({
  userId,
  name,
  surname,
  picture,
  messages,
  text,
  textChange,
  sendMessage,
}) => {
  const bottomDiv = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    bottomDiv.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={classes["chat"]}>
      <div className={classes["header-chat"]}>
        <p className={classes["name"]}>{`${name} ${surname}`}</p>
      </div>
      <div className={classes["messages-chat"]}>
        {messages.map((message) => (
          <Message
            key={message.id}
            text={message.content}
            timestamp={message.createdAt}
            firstMessage={message.sender != userId}
            response={message.sender == userId}
            picture={picture}
          />
        ))}
        {messages.length == 0 &&
          `No messages, start conversation with ${name} ${surname}!`}
        {/* scroll to end of chat div */}
        <div ref={bottomDiv} />
      </div>
      <div className={classes["footer-chat"]}>
        <textarea
          value={text}
          className={classes["write-message"]}
          placeholder="Type a message..."
          onChange={(event) => textChange(event.target.value)}
        ></textarea>
        <div
          className={`${classes["send"]} ${
            text.length == 0 && classes["disabled"]
          }`}
          onClick={sendMessage}
        >
          <SendIcon height={25} width={25} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
