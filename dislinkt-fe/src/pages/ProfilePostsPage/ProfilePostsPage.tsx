import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfilePostsPage.module.css";
import PostsFeed from "../../components/organisms/PostsFeed/PostsFeed";
import { useNavigate } from "react-router-dom";

const ProfilePostsPage: React.FC = () => {
  const navigate = useNavigate();
  const addPostHandler = () => {
    navigate("add");
  };
  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane onAddButtonClick={addPostHandler}>
          <PostsFeed />
        </ProfilePane>
      </div>
    </Layout>
  );
};

export default ProfilePostsPage;
