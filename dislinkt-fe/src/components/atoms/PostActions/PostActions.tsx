import { ReactComponent as LikeIcon } from "../../../assets/svg/like.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/svg/dislike.svg";

import classes from "./PostActions.module.css";
import { useDispatch } from "react-redux";
import { reactToPost } from "../../../store/actions/post-actions";
import ReactionData from "../../../models/data/ReactionData";

interface PostActionsProps {
  id: string;
  likes: number;
  dislikes: number;
  commentCount: number;
  handleViewCommentsClick: (arg: React.MouseEvent<HTMLDivElement>) => void;
}

const PostActions: React.FC<PostActionsProps> = ({
  id,
  likes,
  dislikes,
  commentCount,
  handleViewCommentsClick,
}) => {
  const dispatch = useDispatch();

  const likeHandler = () => {
    const reactionData: ReactionData = {
      positive: true,
    };
    dispatch(reactToPost(id, reactionData));
  };

  const dislikeHandler = () => {
    const reactionData: ReactionData = {
      positive: false,
    };
    dispatch(reactToPost(id, reactionData));
  };

  return (
    <div className={classes["post-actions"]}>
      <div className={classes["likes"]}>
        <LikeIcon
          onClick={likeHandler}
          height={25}
          width={20}
          cursor="pointer"
        />
        <span className={classes["text"]}>{likes}</span>
        <DislikeIcon
          onClick={dislikeHandler}
          height={25}
          width={20}
          cursor="pointer"
        />
        <span className={classes["text"]}>{dislikes}</span>
      </div>
      <div
        className={classes["comments-count"]}
        onClick={(event) => handleViewCommentsClick(event)}
      >
        <span className={classes["text"]}>{commentCount} comments</span>
      </div>
    </div>
  );
};

export default PostActions;
