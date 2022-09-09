import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PostData from "../../models/data/PostData";
import { PostSliceValues } from "../../models/slices/post";

const initPostValues: PostSliceValues = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initPostValues,
  reducers: {
    setPosts(state, action: PayloadAction<PostData[]>) {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
