import classes from "./ChatListItem.module.css";

interface ChatListProps {
  name: string;
  text: string;
  picture: string;
  active?: boolean;
  chatSelected: () => void
}

const ChatListItem: React.FC<ChatListProps> = ({
  name,
  text,
  picture,
  active = false,
  chatSelected
}) => {
  return (
    <div
      className={`${classes["discussion"]} ${active && classes["message-active"]}`}
      onClick={chatSelected}
    >
      <div
        className={classes["photo"]}
        style={{ backgroundImage: `url(${picture})` }}
      />
      <div className={classes["desc-contact"]}>
        <p className={classes["name"]}>{name}</p>
        <p className={classes["message"]}>{text}</p>
      </div>
    </div>
  );
};

export default ChatListItem;
