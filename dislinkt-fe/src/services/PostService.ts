import ReactionData from "../models/data/ReactionData";
import CommentFormValues from "../models/forms/CommentFormValues";
import PostFormValues from "../models/forms/PostFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_POST: "/post-service/",
  GET_POSTS: "/post-service",
  GET_PROFILE_POSTS: "/post-service/profile/",
  SEARCH_POSTS: "/post-service/search?query=",
  CREATE_COMMENT: "/comment",
  CREATE_REACTION: "/reaction",
};

export class PostService extends ApiService {
  getProfilePosts = async (id: string) => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_PROFILE_POSTS + id);

    return data;
  };

  getPosts = async () => {
    const { data } = await this.apiClient.get(ENDPOINTS.GET_POSTS);

    return data;
  };

  searchPosts = async (query: string) => {
    const { data } = await this.apiClient.get(ENDPOINTS.SEARCH_POSTS + query);

    return data;
  };

  createComment = async (id: string, commentFormValues: CommentFormValues) => {
    await this.apiClient.post(
      ENDPOINTS.GET_POST + id + ENDPOINTS.CREATE_COMMENT,
      commentFormValues
    );
  };

  reactToPost = async (id: string, reactionData: ReactionData) => {
    await this.apiClient.post(
      ENDPOINTS.GET_POST + id + ENDPOINTS.CREATE_REACTION,
      reactionData
    );
  };

  addPost = async (postFormValues: PostFormValues) => {
    await this.apiClient.post(ENDPOINTS.GET_POSTS, postFormValues);
  };
}

const postService = new PostService();

export default postService;
