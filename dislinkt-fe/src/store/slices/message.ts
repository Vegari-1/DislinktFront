import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ConversationData from "../../models/data/ConversationData";
import MessageChangeData from "../../models/data/MessageChangeData";
import { MessageValues } from "../../models/slices/message";

const initMessagesValues: MessageValues = {
  conversations: [],
};

const messageSlice = createSlice({
  name: "message",
  initialState: initMessagesValues,
  reducers: {
    setConversations(state, action: PayloadAction<ConversationData[]>) {
      state.conversations = action.payload;
    },
    conversationCreated(state, action: PayloadAction<ConversationData>) {
      state.conversations = [action.payload, ...state.conversations];
      state.displyedConversation = action.payload;
    },
    messageSent(state, action: PayloadAction<MessageChangeData>) {
      state.conversations = state.conversations.map((x) => {
        if (x.id == action.payload.conversationId)
          x.messages.push(action.payload.message);

        if (x.id == state.displyedConversation?.id)
          state.displyedConversation = x;
        return x;
      });
    },
    receivedMessage(state, action: PayloadAction<MessageChangeData>) {
      state.conversations = state.conversations.map((x) => {
        if (x.id == action.payload.conversationId)
          x.messages.push(action.payload.message);

        if (x.id == state.displyedConversation?.id)
          state.displyedConversation = x;
        return x;
      });
    },
    setDisplayedConversation(state, action: PayloadAction<ConversationData>) {
      state.displyedConversation = action.payload;
    },
  },
});

export const {
  messageSent,
  setConversations,
  receivedMessage,
  setDisplayedConversation,
  conversationCreated,
} = messageSlice.actions;

export default messageSlice.reducer;
