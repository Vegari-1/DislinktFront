import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "../../components/molecules/Chat/Chat";
import ChatList from "../../components/molecules/ChatList/ChatList";
import ChatSuggestions from "../../components/molecules/ChatSuggestions/ChatSuggestions";
import Layout from "../../components/organisms/Layout/Layout";
import ConversationData from "../../models/data/ConversationData";
import ProfileNestedData from "../../models/data/ProfileNestedData";
import ProfileSimple from "../../models/data/ProfileSimple";
import {
  getConversations,
  startConversation,
  sendMessage,
  initWs,
  terminateWs,
} from "../../store/actions/message-actions";
import {
  getNotBlockedProfiles,
  getProfile,
} from "../../store/actions/profile-actions";
import { setDisplayedConversation } from "../../store/slices/message";
import { RootState } from "../../store/store";

import classes from "./MessagesPage.module.css";

const TEMP_CONVESATION = "TEMP";

const MessagesPage: React.FC = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const displayedConversation: ConversationData | undefined = useSelector(
    (state: RootState) => state.messages.displyedConversation
  );

  const profiles: ProfileSimple[] = useSelector((state: RootState) =>
    state.profile.profiles.filter(
      (profile) => profile.id !== state.auth.userData.id
    )
  );

  const conversations: ConversationData[] = useSelector(
    (state: RootState) => state.messages.conversations
  );

  const userId: string = useSelector(
    (state: RootState) => state.auth.userData.id
  );

  const user: ProfileNestedData = useSelector((state: RootState) => ({
    globalId: state.profile.profile.id,
    avatar: state.profile.profile.picture,
    name: state.profile.profile.name,
    surname: state.profile.profile.surname,
  }));

  useEffect(() => {
    if (!userId) return;

    dispatch(initWs(userId, dispatch));
    return () => {
      dispatch(terminateWs());
    };
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userId) return;

    dispatch(getNotBlockedProfiles());
    dispatch(getConversations());
    dispatch(getProfile(userId));
  }, [dispatch, userId]);

  const textChange = (text: string) => {
    setText(text);
  };

  const startConversationWith = (profile: ProfileSimple) => {
    var conversation = conversations.find(
      (c) =>
        c.participants.some((x) => x.globalId === profile.id) &&
        c.participants.some((x) => x.globalId === userId)
    );

    if (conversation === null)
      conversation = {
        id: TEMP_CONVESATION,
        participants: [
          {
            globalId: profile.id,
            avatar: profile.picture,
            name: profile.name,
            surname: profile.surname,
          },
        ],
        messages: [],
      };

    dispatch(setDisplayedConversation(conversation!));
  };

  const handleSendMessage = () => {
    if (!displayedConversation) return;

    if (displayedConversation.id === TEMP_CONVESATION) {
      dispatch(
        startConversation(
          user,
          displayedConversation.participants.find(
            (x) => x.globalId !== userId
          )!,
          text
        )
      );
    } else dispatch(sendMessage(displayedConversation.id, userId, text));

    setText("");
  };

  const conversationSelected = (conversation: ConversationData) => {
    dispatch(setDisplayedConversation(conversation));
  };

  return (
    <Layout>
      <div className={classes["layout"]}>
        {!displayedConversation ? (
          <div className={classes["placeholder"]}>No conversations!</div>
        ) : (
          <Chat
            text={text}
            textChange={textChange}
            userId={user.globalId}
            name={
              displayedConversation.participants.find(
                (x) => x.globalId !== userId
              )?.name || ""
            }
            surname={
              displayedConversation.participants.find(
                (x) => x.globalId !== userId
              )?.surname || ""
            }
            picture={
              displayedConversation.participants.find(
                (x) => x.globalId !== userId
              )?.avatar || ""
            }
            messages={displayedConversation.messages || []}
            sendMessage={handleSendMessage}
          />
        )}

        <div className={classes["side"]}>
          <ChatSuggestions
            profiles={profiles}
            profileSelected={startConversationWith}
          />
          <ChatList
            userId={userId}
            conversations={conversations}
            conversationSelected={conversationSelected}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MessagesPage;
