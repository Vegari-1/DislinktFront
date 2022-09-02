import ProfileInfoForm from "../../components/molecules/ProfileInfoForm/ProfileInfoForm";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfileInfoPage.module.css";

const ProfileInfoPage: React.FC = () => {
  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfileInfoForm />
      </div>
    </Layout>
  );
};

export default ProfileInfoPage;
