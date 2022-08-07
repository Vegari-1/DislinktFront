import { ReactComponent as LikeIcon } from "../../../assets/svg/like.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/svg/dislike.svg";

import classes from "./Post.module.css";

const Post: React.FC = () => {
  return (
    <div className={classes["post"]}>
      <div className={classes["post-header"]}>
        <div className={classes["post-header-image"]} />
        <span className={classes["full-name"]}>
          <b>Ksenija Prcic</b>
        </span>
        <span className={classes["username"]}>@ksenija</span>
        <span className={classes["dot"]}>&#8226;</span>
        <span className={classes["date"]}> 06:07:59 7/8/2022</span>
      </div>
      <div className={classes["post-body"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className={classes["post-actions"]}>
        <div className={classes["likes"]}>
          <LikeIcon height={25} width={20} />
          <span className={classes["text"]}>128</span>
          <DislikeIcon height={25} width={20} />
          <span className={classes["text"]}>17</span>
        </div>
        <div className={classes["comments"]}>
          <span className={classes["text"]}>31 comments</span>
        </div>
      </div>

      <div className={classes["pictures-wrapper"]}>
        <div className={classes["pictures"]}>
          <div className={classes["picture"]}></div>
          <div className={classes["picture"]}></div>
          <div className={classes["picture"]}></div>
        </div>
      </div>
      <div className={classes["blur"]} />
    </div>
  );
};

export default Post;
