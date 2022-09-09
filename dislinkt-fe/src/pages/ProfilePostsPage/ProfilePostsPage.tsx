import ProfilePane from "../../components/organisms/ProfilePane/ProfilePane";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./ProfilePostsPage.module.css";
import PostsFeed from "../../components/organisms/PostsFeed/PostsFeed";
import { useNavigate, useParams } from "react-router-dom";
import ProfileInfoData from "../../models/data/ProfileInfoData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { getProfile } from "../../store/actions/profile-actions";
import PostData from "../../models/data/PostData";
import { getProfilePosts } from "../../store/actions/post-actions";

const ProfilePostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const profile: ProfileInfoData = useSelector(
    (state: RootState) => state.profile.profile
  );
  const posts: PostData[] = useSelector((state: RootState) => state.post.posts);

  useEffect(() => {
    dispatch(getProfile(id!));
    dispatch(getProfilePosts(id!));
  }, [dispatch, id]);

  const addPostHandler = () => {
    navigate("add");
  };

  return (
    <Layout>
      <div className={classes["streach"]}>
        <ProfilePane profile={profile} onAddButtonClick={addPostHandler}>
          <PostsFeed posts={posts} />
        </ProfilePane>
      </div>
    </Layout>
  );
};

export default ProfilePostsPage;
