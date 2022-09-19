import { ReactComponent as LikeIcon } from "../../../assets/svg/like.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/svg/dislike.svg";
import { ReactComponent as LikeActiveIcon } from "../../../assets/svg/like-active.svg";
import { ReactComponent as DislikeActiveIcon } from "../../../assets/svg/dislike-active.svg";

import classes from "./PostActions.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reactToPost } from "../../../store/actions/post-actions";
import ReactionData from "../../../models/data/ReactionData";
import { RootState } from "../../../store/store";

interface PostActionsProps {
  id: string;
  likes: number;
  dislikes: number;
  liked: boolean;
  disliked: boolean;
  commentCount: number;
  handleViewCommentsClick: (arg: React.MouseEvent<HTMLDivElement>) => void;
}

const PostActions: React.FC<PostActionsProps> = ({
  id,
  likes,
  dislikes,
  liked,
  disliked,
  commentCount,
  handleViewCommentsClick,
}) => {
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.auth.userData);

  const likeHandler = () => {
    if (userData.id === undefined) {
      return;
    }
    const reactionData: ReactionData = {
      positive: true,
    };
    dispatch(reactToPost(id, reactionData));
  };

  const dislikeHandler = () => {
    if (userData.id === undefined) {
      return;
    }
    const reactionData: ReactionData = {
      positive: false,
    };
    dispatch(reactToPost(id, reactionData));
  };

  return (
    <div className={classes["post-actions"]}>
      <div className={classes["likes"]}>
        {!liked && (
          <LikeIcon
            onClick={likeHandler}
            height={25}
            width={20}
            cursor="pointer"
          />
        )}
        {liked && <LikeActiveIcon height={25} width={20} />}
        <span className={classes["text"]}>{likes}</span>
        {!disliked && (
          <DislikeIcon
            onClick={dislikeHandler}
            height={25}
            width={20}
            cursor="pointer"
          />
        )}
        {disliked && <DislikeActiveIcon height={25} width={20} />}
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
