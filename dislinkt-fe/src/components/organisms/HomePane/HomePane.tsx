import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostData from "../../../models/data/PostData";
import { getPosts, searchPosts } from "../../../store/actions/post-actions";
import { RootState } from "../../../store/store";
import Header from "../../molecules/Header/Header";
import Layout from "../Layout/Layout";
import PostsFeed from "../PostsFeed/PostsFeed";
import classes from "./HomePane.module.css";

const HomePane: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const posts: PostData[] = useSelector((state: RootState) => state.post.posts);

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    if (query.trim().length === 0) {
      dispatch(getPosts());
    } else {
      dispatch(searchPosts(query));
    }
  }, [query]);

  const setSearchValueHandler = (query: string) => {
    setQuery(query);
  };

  return (
    <Layout>
      <Header setSearchValue={setSearchValueHandler} />
      <div className={classes["streach"]}>
        <PostsFeed posts={posts} />
      </div>
    </Layout>
  );
};

export default HomePane;
