import ReactionData from "../models/data/ReactionData";
import CommentFormValues from "../models/forms/CommentFormValues";
import PostFormValues from "../models/forms/PostFormValues";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_POST: "/post/",
  GET_POSTS: "/post",
  GET_PROFILE_POSTS: "/post/profile/",
  SEARCH_POSTS: "/post?query=",
  CREATE_COMMENT: "/comment",
  CREATE_REACTION: "/reaction",
};

export class PostService extends ApiService {
  getProfilePosts = async (id: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.GET_PROFILE_POSTS + id
    // );

    // return data;
    return [
      {
        id: "1",
        name: "Ksenija",
        surname: "Prcic",
        username: "@ksenija",
        picture: "picture",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: new Date(),
        likes: 15,
        dislikes: 1,
        commentCount: 3,
        pictures: ["picture 1", "picture 2"],
        comments: [
          {
            id: "1",
            name: "Pera",
            surname: "Peric",
            username: "pera",
            picture: "picture",
            content: "Strava",
            timestamp: new Date(),
          },
        ],
      },
    ];
  };

  getPosts = async () => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.GET_POSTS + id
    // );

    // return data;

    return [
      {
        id: "1",
        name: "Ksenija",
        surname: "Prcic",
        username: "@ksenija",
        picture: "picture",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        timestamp: new Date(),
        likes: 15,
        dislikes: 1,
        commentCount: 3,
        pictures: ["picture 1", "picture 2", "picture3"],
        comments: [
          {
            id: "1",
            name: "Pera",
            surname: "Peric",
            username: "pera",
            picture: "picture",
            content: "Strava",
            timestamp: new Date(),
          },
        ],
        liked: true,
        disliked: true,
      },
    ];
  };

  searchPosts = async (query: string) => {
    // const { data } = await this.apiClient.get(
    //   ENDPOINTS.SEARCH_POSTS + query
    // );

    // return data;
    console.log(query);

    return [];
  };

  createComment = async (id: string, commentFormValues: CommentFormValues) => {
    // await this.apiClient.post(
    //   ENDPOINTS.GET_POST + id + ENDPOINTS.CREATE_COMMENT,
    //   commentFormValues
    // );

    console.log(
      "Created comment with id: " +
        id +
        " and data " +
        commentFormValues.content
    );
  };

  reactToPost = async (id: string, reactionData: ReactionData) => {
    // await this.apiClient.post(
    //   ENDPOINTS.GET_POST + id + ENDPOINTS.CREATE_REACTION,
    //   reactionData
    // );

    console.log(
      "Added reaction to: " + id + " and data " + reactionData.positive
    );
  };

  addPost = async (postFormValues: PostFormValues) => {
    // await this.apiClient.post(
    //   ENDPOINTS.GET_POST,
    //   postFormValues
    // );

    console.log(postFormValues);
  };
}

const postService = new PostService();

export default postService;
