import ConversationData from "../data/ConversationData";

export interface MessageValues {
  conversations: ConversationData[];
  displyedConversation?: ConversationData;
}
