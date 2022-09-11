import ProfileNestedData from "../data/ProfileNestedData";

interface PostFormValues {
  content: string;
  images?: File[];
  profile?: ProfileNestedData;
}

export default PostFormValues;
