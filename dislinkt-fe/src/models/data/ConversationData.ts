import MessageData from "./MessageData";
import ProfileNestedData from "./ProfileNestedData";

interface ConversationData {
  id: string;
  participants: ProfileNestedData[];
  messages: MessageData[];
}

export default ConversationData;
