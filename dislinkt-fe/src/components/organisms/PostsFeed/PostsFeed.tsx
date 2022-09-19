import PostData from "../../../models/data/PostData";
import EntititesEmptyList from "../../atoms/EntitiesEmptyList/EntititesEmptyList";
import Post from "../../molecules/Post/Post";
import classes from "./PostsFeed.module.css";

interface PostsFeedProps {
  posts: PostData[];
}

const PostsFeed: React.FC<PostsFeedProps> = ({ posts }) => {
  return (
    <div className={classes["feed-wrapper"]}>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}

      {posts.length === 0 && <EntititesEmptyList entities="posts" />}
    </div>
  );
};

export default PostsFeed;
