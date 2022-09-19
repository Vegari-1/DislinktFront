import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType,
} from "@microsoft/signalr";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import ConversationData from "../models/data/ConversationData";
import MessageData from "../models/data/MessageData";
import ProfileNestedData from "../models/data/ProfileNestedData";
import { conversationCreated, messageSent } from "../store/slices/message";

const ENDPOINTS = {
  GET_CONVERSATIONS: "/message-service/conversationHub",
};

const EVENTS = {
  MSG_RECEIVED: "messageReceived",
  MSG_SENT: "messageSent",
  CONVERSATION_CREATED: "conversationCreated",
};

const WS_METHODS = {
  START_CONVERSATION: "StartConversation",
  SEND_MESSAGE: "SendMessage",
  TERMINATE: "Terminate",
};

export class MessageService {
  private connection?: HubConnection;
  private userId?: string;

  initialize = async (userId: string, dispatch: Dispatch<AnyAction>) => {
    const token = localStorage.getItem("dislinkt-token");
    if (token == null) return;

    if (this.connection == null || this.userId != userId) {
      this.userId = userId;
      this.connection = new HubConnectionBuilder()
        .configureLogging(LogLevel.Debug)
        .withUrl(
          `http://localhost:5000/api${ENDPOINTS.GET_CONVERSATIONS}?profileId=${this.userId}`,
          {
            accessTokenFactory: () => token,
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
          }
        )
        .build();

      this.connection.on(
        EVENTS.MSG_RECEIVED,
        (conversationId: string, message: MessageData) => {
          dispatch(messageSent({ conversationId, message }));
        }
      );

      this.connection.on(
        EVENTS.MSG_SENT,
        (conversationId: string, message: MessageData) => {
          dispatch(messageSent({ conversationId, message }));
        }
      );

      this.connection.on(
        EVENTS.CONVERSATION_CREATED,
        (conversation: ConversationData) => {
          dispatch(conversationCreated(conversation));
        }
      );
    }

    await this.connection.start();
  };

  startConversation = async (
    sender: ProfileNestedData,
    receiver: ProfileNestedData,
    message: string
  ) => {
    await this.connection?.invoke(
      WS_METHODS.START_CONVERSATION,
      sender,
      receiver,
      message
    );
  };

  sendMessage = async (
    conversationId: string,
    senderId: string,
    message: string
  ) => {
    await this.connection?.invoke(
      WS_METHODS.SEND_MESSAGE,
      conversationId,
      senderId,
      message
    );
  };

  terminate = async () => {
    await this.connection?.invoke(WS_METHODS.TERMINATE);
    await this.connection?.stop();
  };
}

const messageService = new MessageService();

export default messageService;
