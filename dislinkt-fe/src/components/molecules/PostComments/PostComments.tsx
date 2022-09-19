import { useSelector } from "react-redux";
import CommentData from "../../../models/data/CommentData";
import { RootState } from "../../../store/store";
import TextPost from "../../atoms/TextPost/TextPost";
import CommentForm from "../CommentForm/CommentForm";
import classes from "./PostComments.module.css";

interface PostCommentsProps {
  comments: CommentData[];
  id: string;
  active: boolean;
}

const PostComments: React.FC<PostCommentsProps> = ({
  comments,
  id,
  active,
}) => {
  const userData = useSelector((state: RootState) => state.auth.userData);

  return (
    <div
      className={classes["comments"]}
      style={{
        maxHeight: active ? "450px" : "0",
        overflowY: active ? "auto" : "hidden",
      }}
    >
      <h3>Comments</h3>
      {userData.id !== undefined && <CommentForm key={"key"} id={id} />}
      {comments.map((comment) => (
        <div className={classes["comment"]}>
          <TextPost
            key={comment.id}
            name={comment.name}
            surname={comment.surname}
            username={comment.username}
            picture={comment.avatar}
            timestamp={comment.timestamp}
            content={comment.content}
            imageSize="45px"
            hasBody
          />
        </div>
      ))}
    </div>
  );
};

export default PostComments;
