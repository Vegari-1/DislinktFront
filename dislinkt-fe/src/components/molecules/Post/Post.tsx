import classes from "./Post.module.css";
import { useState } from "react";
import TextPost from "../../atoms/TextPost/TextPost";
import PostActions from "../../atoms/PostActions/PostActions";
import PicturePost from "../PicturePost/PicturePost";
import PostComments from "../PostComments/PostComments";

const Post: React.FC = () => {
  const [commentsActive, setCommentsActive] = useState(false);

  const onChangeCommentsHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCommentsActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes["post"]}>
      <TextPost imageSize="60px" hasBody={true} />
      <PostActions handleViewCommentsClick={onChangeCommentsHandler} />
      <PicturePost />
      <PostComments active={commentsActive} />
    </div>
  );
};

export default Post;
