import Post from "../../molecules/Post/Post";
import classes from "./PostsFeed.module.css";

const PostsFeed: React.FC = () => {
  return (
    <div className={classes["feed"]}>
      <Post />
      <Post />
    </div>
  );
};

export default PostsFeed;
