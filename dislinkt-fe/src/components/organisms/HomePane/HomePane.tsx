import Header from "../../molecules/Header/Header";
import Layout from "../Layout/Layout";
import PostsFeed from "../PostsFeed/PostsFeed";

const HomePane: React.FC = () => {
  return (
    <Layout>
      <Header />
      <PostsFeed />
    </Layout>
  );
};

export default HomePane;
