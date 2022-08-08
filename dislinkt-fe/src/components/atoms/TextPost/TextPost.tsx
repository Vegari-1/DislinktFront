import { Fragment } from "react";
import classes from "./TextPost.module.css";

interface TextPostProps {
    imageSize: string;
    hasBody: boolean;
}

const TextPost: React.FC<TextPostProps> = ({ imageSize, hasBody }) => {
  
    return (
        <Fragment>
            <div className={classes["post-header"]}>
            <div className={classes["post-header-image"]} 
                style={{width: imageSize, height: imageSize }}/>
            <span className={classes["full-name"]}>
                <b>Ksenija Prcic</b>
            </span>
            <span className={classes["username"]}>@ksenija</span>
            <span className={classes["dot"]}>&#8226;</span>
            <span className={classes["date"]}> 06:07:59 7/8/2022</span>
            </div>
            { hasBody && 
                <div className={classes["post-body"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </div>
            }
        </Fragment>
  );
};

export default TextPost;
