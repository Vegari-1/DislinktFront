import ChatListItem from "../../atoms/ChatListItem/ChatListItem";
import classes from "./ChatList.module.css";

const ChatList: React.FC = () => {
  return (
    <div className={classes["discussions"]}>
      <ChatListItem
        name="Megan Leib"
        text="9 pm at the bar if possible 😳"
        active
      />
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />{" "}
      <ChatListItem
        name="Dave Corlew"
        text="Let's meet for a coffee or somethi"
      />
    </div>
  );
};

export default ChatList;
