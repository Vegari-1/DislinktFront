import Chat from "../../components/molecules/Chat/Chat";
import ChatList from "../../components/molecules/ChatList/ChatList";
import Layout from "../../components/organisms/Layout/Layout";

import classes from "./MessagesPage.module.css";

const MessagesPage: React.FC = () => {
  return (
    <Layout>
      <div className={classes["layout"]}>
        <Chat name="Megan" surname="Leib" picture="picture" messages={[]} />
        <ChatList />
      </div>
    </Layout>
  );
};

export default MessagesPage;
