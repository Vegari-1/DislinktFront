import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import CommentData from "../../models/data/CommentData";
import PostData from "../../models/data/PostData";
import postService from "../../services/PostService";
import {
  addPost,
  createComment,
  getProfilePosts,
  reactToPost,
  searchPosts,
} from "../actions/post-actions";
import { setPosts } from "../slices/post";

export function* handleGetProfilePosts({
  payload,
}: ReturnType<typeof getProfilePosts>): Generator<any, void, PostData[]> {
  try {
    const posts: PostData[] = yield call(
      postService.getProfilePosts,
      payload.id
    );

    yield put(setPosts(posts));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleGetPosts(): Generator<any, void, PostData[]> {
  try {
    const posts: PostData[] = yield call(postService.getPosts);

    yield put(setPosts(posts));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleSearchPosts({
  payload,
}: ReturnType<typeof searchPosts>): Generator<any, void, PostData[]> {
  try {
    const posts: PostData[] = yield call(
      postService.searchPosts,
      payload.query
    );

    yield put(setPosts(posts));
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleCreateComment({
  payload,
}: ReturnType<typeof createComment>): Generator<any, void, void> {
  try {
    yield call(
      postService.createComment,
      payload.id,
      payload.commentFormValues
    );

    yield handleGetPosts();
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleReactToPost({
  payload,
}: ReturnType<typeof reactToPost>): Generator<any, void, void> {
  try {
    yield call(postService.reactToPost, payload.id, payload.reactionData);

    yield handleGetPosts();
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}

export function* handleAddPost({
  payload,
}: ReturnType<typeof addPost>): Generator<any, void, void> {
  try {
    yield call(postService.addPost, payload);
  } catch (error: any) {
    yield toast.error(error.response.data.message);
  }
}
