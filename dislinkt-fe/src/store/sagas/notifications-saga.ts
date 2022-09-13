import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import SettingsFormValues from "../../models/forms/SettingsFormValues";
import notificationService from "../../services/NotificationService";
import { updateNotifications } from "../actions/notification-actions";
import { setNotifications } from "../slices/notifications";

export function* handleGetNotifications(): Generator<
  any,
  void,
  SettingsFormValues
> {
  try {
    const notifications: SettingsFormValues = yield call(
      notificationService.getNotifications
    );

    yield put(setNotifications(notifications));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleUpdateNotifications({
  payload,
}: ReturnType<typeof updateNotifications>): Generator<any, void, void> {
  try {
    yield call(notificationService.updateNotifications, payload);
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}
