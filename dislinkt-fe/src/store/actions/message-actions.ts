import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import ProfileNestedData from "../../models/data/ProfileNestedData";

import {
  GET_CONVERSATIONS,
  INIT_WS,
  SEND_MESSAGE,
  START_CONVERSATION,
  TERMINATE_WS,
} from "./action-types";

export const getConversations = () => {
  return { type: GET_CONVERSATIONS };
};

export const sendMessage = (
  conversationId: string,
  senderId: string,
  message: string
) => {
  return {
    type: SEND_MESSAGE,
    payload: { conversationId, senderId, message },
  };
};

export const startConversation = (
  sender: ProfileNestedData,
  receiver: ProfileNestedData,
  message: string
) => {
  return {
    type: START_CONVERSATION,
    payload: { sender, receiver, message },
  };
};

export const initWs = (userId: string, dispatch: Dispatch<AnyAction>) => {
  return {
    type: INIT_WS,
    payload: { userId, dispatch },
  };
};

export const terminateWs = () => {
  return {
    type: TERMINATE_WS,
  };
};
