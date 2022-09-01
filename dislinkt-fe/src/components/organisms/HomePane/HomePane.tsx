import Header from "../../molecules/Header/Header";
import Layout from "../Layout/Layout";
import PostsFeed from "../PostsFeed/PostsFeed";
import classes from "./HomePane.module.css";

const HomePane: React.FC = () => {
  return (
    <Layout>
      <Header />
      <div className={classes["streach"]}>
        <PostsFeed />
      </div>
    </Layout>
  );
};

export default HomePane;
