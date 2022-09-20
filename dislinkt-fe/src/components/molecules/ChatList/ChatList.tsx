import ConversationData from "../../../models/data/ConversationData";
import ChatListItem from "../../atoms/ChatListItem/ChatListItem";
import classes from "./ChatList.module.css";

interface ChatListProps {
  userId: string;
  conversations: ConversationData[];
  conversationSelected: (conversation: ConversationData) => void;
}

const ChatList: React.FC<ChatListProps> = ({
  userId,
  conversations,
  conversationSelected,
}) => {
  return (
    <div className={classes["discussions"]}>
      <h3>Conversations:</h3>
      {conversations.map((conversation) => (
        <ChatListItem
          key={conversation.id}
          name={
            conversation.participants.find((x) => x.globalId != userId)?.name ||
            ""
          }
          text={
            conversation.messages.length > 0
              ? conversation.messages[conversation.messages.length - 1].content
              : ""
          }
          picture={
            conversation.participants.find((x) => x.globalId != userId)
              ?.avatar || ""
          }
          active
          chatSelected={() => conversationSelected(conversation)}
        />
      ))}
    </div>
  );
};

export default ChatList;
