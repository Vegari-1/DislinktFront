import NotificationSettingsForm from "../../components/molecules/SettingsForm/SettingsForm";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./SettingsPage.module.css";

const SettingsPage: React.FC = () => {
  return (
    <Layout>
      <div className={classes["streach"]}>
        <NotificationSettingsForm />
      </div>
    </Layout>
  );
};

export default SettingsPage;
