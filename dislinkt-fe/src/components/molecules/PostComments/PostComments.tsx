import CommentData from "../../../models/data/CommentData";
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
  return (
    <div
      className={classes["comments"]}
      style={{
        maxHeight: active ? "450px" : "0",
        overflowY: active ? "auto" : "hidden",
      }}
    >
      <h3>Comments</h3>
      <CommentForm id={id} />
      {comments.map((comment) => (
        <div className={classes["comment"]}>
          <TextPost
            key={comment.id}
            name={comment.name}
            surname={comment.surname}
            username={comment.username}
            picture={comment.picture}
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
