import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";

import ConversationData from "../../models/data/ConversationData";
import conversationService from "../../services/ConversationService";
import messageService from "../../services/MessageService";

import {
  sendMessage,
  startConversation,
  initWs,
} from "../actions/message-actions";

import { setConversations } from "../slices/message";

export function* handleGetConversations(): Generator<
  any,
  void,
  ConversationData[]
> {
  try {
    var data: ConversationData[] = yield call(
      conversationService.getConversations
    );

    yield put(setConversations(data));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleInit({
  payload,
}: ReturnType<typeof initWs>): Generator<any, void, void> {
  try {
    yield call(messageService.initialize, payload.userId, payload.dispatch);
  } catch (error: any) {
    yield toast.error(error);
  }
}

export function* handleStartConversation({
  payload,
}: ReturnType<typeof startConversation>): Generator<any, void, void> {
  try {
    yield call(
      messageService.startConversation,
      payload.sender,
      payload.receiver,
      payload.message
    );
  } catch (error: any) {
    yield toast.error(error);
  }
}

export function* handleSendMessage({
  payload,
}: ReturnType<typeof sendMessage>): Generator<any, void, void> {
  try {
    yield call(
      messageService.sendMessage,
      payload.conversationId,
      payload.senderId,
      payload.message
    );
  } catch (error: any) {
    yield toast.error(error);
  }
}

export function* handleTerminate(): Generator<any, void, void> {
  try {
    yield call(messageService.terminate);
  } catch (error: any) {
    yield toast.error(error);
  }
}
