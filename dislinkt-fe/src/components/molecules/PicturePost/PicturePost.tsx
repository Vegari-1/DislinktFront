import classes from "./PicturePost.module.css";

interface PicturePostProps {
}

const PicturePost: React.FC<PicturePostProps> = () => {
  
    return (
        <div className={classes["pictures-wrapper"]}>
            <div className={classes["pictures"]}>
            <div className={classes["picture"]}></div>
            <div className={classes["picture"]}></div>
            <div className={classes["picture"]}></div>
            </div>
        {/* <div className={classes["blur"]} /> */}
        </div>
  );
};

export default PicturePost;
