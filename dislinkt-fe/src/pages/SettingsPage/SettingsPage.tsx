import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationSettingsForm from "../../components/molecules/SettingsForm/SettingsForm";
import Layout from "../../components/organisms/Layout/Layout";
import SettingsFormValues from "../../models/forms/SettingsFormValues";
import { getNotifications } from "../../store/actions/notification-actions";
import { RootState } from "../../store/store";
import classes from "./SettingsPage.module.css";

const SettingsPage: React.FC = () => {
  const dispatch = useDispatch();
  const notifications: SettingsFormValues = useSelector(
    (state: RootState) => state.notifications.notifications
  );

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <Layout>
      <div className={classes["streach"]}>
        <NotificationSettingsForm notifications={notifications} />
      </div>
    </Layout>
  );
};

export default SettingsPage;
