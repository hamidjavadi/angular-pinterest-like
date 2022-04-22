import { IPost } from "src/app/types/post";

export interface IPostState {
  currentPage: number,
  filterKeyword: string,
  isLoading: boolean,
  perPage: number
  posts: IPost[],
  total: number,
}
