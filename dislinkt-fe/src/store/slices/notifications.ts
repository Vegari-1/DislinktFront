import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SettingsFormValues from "../../models/forms/SettingsFormValues";
import { NotificationSliceValues } from "../../models/slices/notifications";

const initNotificationValues: NotificationSliceValues = {
  notifications: {
    id: "",
    connections: false,
    messages: false,
    posts: false,
  },
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: initNotificationValues,
  reducers: {
    setNotifications(state, action: PayloadAction<SettingsFormValues>) {
      state.notifications = action.payload;
    },
  },
});

export const { setNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;
