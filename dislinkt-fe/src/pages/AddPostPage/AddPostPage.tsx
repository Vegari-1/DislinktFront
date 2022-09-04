import PostForm from "../../components/molecules/PostForm/PostForm";
import Layout from "../../components/organisms/Layout/Layout";
import classes from "./AddPostPage.module.css";

const AddPostPage: React.FC = () => {
  return (
    <Layout>
      <div className={classes["streach"]}>
        <PostForm />
      </div>
    </Layout>
  );
};

export default AddPostPage;
