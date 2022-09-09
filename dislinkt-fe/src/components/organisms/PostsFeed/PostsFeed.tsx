import PostData from "../../../models/data/PostData";
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
    </div>
  );
};

export default PostsFeed;
