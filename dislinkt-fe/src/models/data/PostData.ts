import CommentData from "./CommentData";

interface PostData {
  id: string;
  name: string;
  surname: string;
  username: string;
  avatar: string;
  content: string;
  timestamp: Date;
  likes: number;
  dislikes: number;
  commentCount: number;
  pictures: string[];
  comments: CommentData[];
  liked: boolean;
  disliked: boolean;
}

export default PostData;
