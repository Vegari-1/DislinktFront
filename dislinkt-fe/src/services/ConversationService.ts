import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_CONVERSATIONS: "/message-service"
};

export class ConversationService extends ApiService {
  getConversations = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_CONVERSATIONS);

    return data.items;
  };
}

const conversationService = new ConversationService();

export default conversationService;
