import classes from "./PicturePost.module.css";

interface PicturePostProps {
  pictures: string[];
}

const PicturePost: React.FC<PicturePostProps> = ({ pictures }) => {
  return (
    <div className={classes["pictures-wrapper"]}>
      <div className={classes["pictures"]}>
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={classes["picture"]}
            style={{ backgroundImage: `url(${picture})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default PicturePost;
