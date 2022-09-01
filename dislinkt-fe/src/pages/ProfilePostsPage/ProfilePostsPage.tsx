import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfilePostsPage.module.css";
import PostsFeed from "../../components/organisms/PostsFeed/PostsFeed";

const ProfilePostsPage: React.FC = () => {
  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane>
          <PostsFeed />
        </ProfilePane>
      </div>
    </Layout>
  );
};

export default ProfilePostsPage;
