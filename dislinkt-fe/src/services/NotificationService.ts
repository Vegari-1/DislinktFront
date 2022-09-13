import SettingsFormValues from "../models/forms/SettingsFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  NOTIFICATIONS: "/notification-service",
};

export class NotificationService extends ApiService {
  getNotifications = async () => {
    // const { data } = await this.apiClient.get(ENDPOINTS.NOTIFICATIONS);

    // return data;

    return { messages: true, connections: true, posts: true };
  };

  updateNotifications = async (settingsFormValues: SettingsFormValues) => {
    // const { data } = await this.apiClient.put(ENDPOINTS.NOTIFICATIONS);

    // return data;

    console.log(settingsFormValues);
  };
}

const notificationService = new NotificationService();

export default notificationService;
