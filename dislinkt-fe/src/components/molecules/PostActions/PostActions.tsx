import { ReactComponent as LikeIcon } from "../../../assets/svg/like.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/svg/dislike.svg";

import classes from "./PostActions.module.css";

interface PostActionsProps {
    handleViewCommentsClick: (arg: React.MouseEvent<HTMLDivElement>) => void;
}

const PostActions: React.FC<PostActionsProps> = ({ handleViewCommentsClick }) => {
  
    return (
        <div className={classes["post-actions"]}>
            <div className={classes["likes"]}>
                <LikeIcon height={25} width={20} />
                <span className={classes["text"]}>128</span>
                <DislikeIcon height={25} width={20} />
                <span className={classes["text"]}>17</span>
            </div>
            <div 
                className={classes["comments-count"]}
                onClick={event => handleViewCommentsClick(event)}
            >
                <span className={classes["text"]}>31 comments</span>
            </div>
        </div>
  );
};

export default PostActions;
