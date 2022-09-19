import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";
import PostData from "../../models/data/PostData";
import postService from "../../services/PostService";
import { GET_PROFILE_POSTS } from "../actions/action-types";
import {
  addPost,
  createComment,
  getProfilePosts,
  reactToPost,
  searchPosts,
} from "../actions/post-actions";
import { setPosts, setReload } from "../slices/post";

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
    yield toast.error(error.response.data.Message);
  }
}

export function* handleGetPosts(): Generator<any, void, PostData[]> {
  try {
    const posts: PostData[] = yield call(postService.getPosts);

    yield put(setPosts(posts));
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
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
    yield toast.error(error.response.data.Message);
  }
}

export function* handleCreateComment({
  payload,
}: ReturnType<typeof createComment>): Generator<any, void, void> {
  try {
    yield put(setReload(false));

    yield call(
      postService.createComment,
      payload.id,
      payload.commentFormValues
    );

    yield put(setReload(true));
    // yield call(handleGetProfilePosts, {
    //   type: GET_PROFILE_POSTS,
    //   payload: { id: payload.commentFormValues.profileId! },
    // });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleReactToPost({
  payload,
}: ReturnType<typeof reactToPost>): Generator<any, void, void> {
  try {
    yield call(postService.reactToPost, payload.id, payload.reactionData);

    yield handleGetPosts();
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}

export function* handleAddPost({
  payload,
}: ReturnType<typeof addPost>): Generator<any, void, void> {
  try {
    yield call(postService.addPost, payload);
    yield call(handleGetProfilePosts, {
      type: GET_PROFILE_POSTS,
      payload: { id: payload.authorId! },
    });
  } catch (error: any) {
    yield toast.error(error.response.data.Message);
  }
}
