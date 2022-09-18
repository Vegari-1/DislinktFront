import SettingsFormValues from "../models/forms/SettingsFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  NOTIFICATIONS: "/notification-service",
};

export class NotificationService extends ApiService {
  getNotifications = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.NOTIFICATIONS);

    return data;
  };

  updateNotifications = async (settingsFormValues: SettingsFormValues) => {
    const { data } = await this.apiClient.put(
      ENDPOINTS.NOTIFICATIONS,
      settingsFormValues
    );

    return data;
  };
}

const notificationService = new NotificationService();

export default notificationService;
