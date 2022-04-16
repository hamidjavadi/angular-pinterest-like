import { IPost } from "src/app/types/post";

export interface IPostState {
  currentPage: number,
  isLoading: boolean,
  perPage: number
  posts: IPost[],
  total: number,
}
