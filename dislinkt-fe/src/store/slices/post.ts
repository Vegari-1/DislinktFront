import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PostData from "../../models/data/PostData";
import { PostSliceValues } from "../../models/slices/post";

const initPostValues: PostSliceValues = {
  posts: [],
  reload: false,
};

const postSlice = createSlice({
  name: "post",
  initialState: initPostValues,
  reducers: {
    setPosts(state, action: PayloadAction<PostData[]>) {
      state.posts = action.payload;
    },
    setReload(state, action: PayloadAction<boolean>) {
      state.reload = action.payload;
    },
  },
});

export const { setPosts, setReload } = postSlice.actions;

export default postSlice.reducer;
