import ReactionData from "../../models/data/ReactionData";
import CommentFormValues from "../../models/forms/CommentFormValues";
import PostFormValues from "../../models/forms/PostFormValues";
import {
  ADD_POST,
  CREATE_COMMENT,
  GET_POSTS,
  GET_PROFILE_POSTS,
  REACT_TO_POST,
  SEARCH_POSTS,
} from "./action-types";

export const getProfilePosts = (id: string) => {
  return {
    type: GET_PROFILE_POSTS,
    payload: { id },
  };
};

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const searchPosts = (query: string) => {
  return {
    type: SEARCH_POSTS,
    payload: { query },
  };
};

export const createComment = (
  id: string,
  commentFormValues: CommentFormValues
) => {
  return {
    type: CREATE_COMMENT,
    payload: {
      id,
      commentFormValues,
    },
  };
};

export const reactToPost = (id: string, reactionData: ReactionData) => {
  return {
    type: REACT_TO_POST,
    payload: {
      id,
      reactionData,
    },
  };
};

export const addPost = (postFormValues: PostFormValues) => {
  return {
    type: ADD_POST,
    payload: postFormValues,
  };
};
