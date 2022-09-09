import SettingsFormValues from "../../models/forms/SettingsFormValues";
import { GET_NOTIFICATIONS, UPDATE_NOTIFICATIONS } from "./action-types";

export const getNotifications = () => {
  return {
    type: GET_NOTIFICATIONS,
  };
};

export const updateNotifications = (settingsFormValues: SettingsFormValues) => {
  return {
    type: UPDATE_NOTIFICATIONS,
    payload: settingsFormValues,
  };
};
