import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingsForm from "../../components/molecules/SettingsForm/SettingsForm";
import Layout from "../../components/organisms/Layout/Layout";
import SettingsFormValues from "../../models/forms/SettingsFormValues";
import { UserDataPayload } from "../../models/slices/auth";
import { getNotifications } from "../../store/actions/notification-actions";
import { RootState } from "../../store/store";
import classes from "./SettingsPage.module.css";

const SettingsPage: React.FC = () => {
  const dispatch = useDispatch();
  const notifications: SettingsFormValues = useSelector(
    (state: RootState) => state.notifications.notifications
  );
  const userData: UserDataPayload = useSelector(
    (state: RootState) => state.auth.userData
  );

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <Layout>
      <div className={classes["streach"]}>
        <SettingsForm profileId={userData.id} notifications={notifications} />
      </div>
    </Layout>
  );
};

export default SettingsPage;
