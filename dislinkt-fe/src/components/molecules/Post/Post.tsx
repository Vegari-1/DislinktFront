import classes from "./Post.module.css";
import { useState } from "react";
import TextPost from "../../atoms/TextPost/TextPost";
import PostActions from "../../atoms/PostActions/PostActions";
import PicturePost from "../PicturePost/PicturePost";
import PostComments from "../PostComments/PostComments";
import CommentData from "../../../models/data/CommentData";

interface PostProps {
  id: string;
  name: string;
  surname: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  liked: boolean;
  disliked: boolean;
  commentCount: number;
  pictures: string[];
  comments: CommentData[];
}

const Post: React.FC<PostProps> = ({
  id,
  name,
  surname,
  username,
  avatar,
  content,
  timestamp,
  likes,
  dislikes,
  liked,
  disliked,
  commentCount,
  pictures,
  comments,
}) => {
  const [commentsActive, setCommentsActive] = useState(false);

  const onChangeCommentsHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setCommentsActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes["post"]}>
      <TextPost
        name={name}
        surname={surname}
        username={username}
        picture={avatar}
        timestamp={timestamp}
        content={content}
        imageSize="60px"
        hasBody={true}
      />
      <PostActions
        id={id}
        likes={likes}
        dislikes={dislikes}
        liked={liked}
        disliked={disliked}
        commentCount={commentCount}
        handleViewCommentsClick={onChangeCommentsHandler}
      />
      <PicturePost pictures={pictures} />
      <PostComments comments={comments} id={id} active={commentsActive} />
    </div>
  );
};

export default Post;
