import TextPost from "../../atoms/TextPost/TextPost";
import CommentForm from "../CommentForm/CommentForm";
import classes from "./PostComments.module.css";

interface PostCommentsProps {
  active: boolean;
}

const PostComments: React.FC<PostCommentsProps> = ({ active }) => {
  return (
    <div
      className={classes["comments"]}
      style={{
        maxHeight: active ? "450px" : "0",
        overflowY: active ? "auto" : "hidden",
      }}
    >
      <h3>Comments</h3>
      <CommentForm />
      <div className={classes["comment"]}>
        <TextPost imageSize="45px" hasBody={true} />
      </div>
      <div className={classes["comment"]}>
        <TextPost imageSize="45px" hasBody={true} />
      </div>
    </div>
  );
};

export default PostComments;
