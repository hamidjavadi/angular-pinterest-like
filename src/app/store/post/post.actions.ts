import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/types/post';

export const fetchPosts = createAction(
  '[Post] Fetch Posts',
  props<{
    isLoading: boolean
  }>()
);

export const fetchPostsSuccess = createAction(
  '[Post] Fetch Posts Success',
  props<{
    currentPage: number
    isLoading: boolean,
    posts: IPost[],
  }>()
);

export const fetchPostsFailure = createAction(
  '[Post] Fetch Posts Failure',
  props<{
    errorMessage: string,
    isLoading: boolean
  }>()
);

export const filterPosts = createAction(
  '[Post] Filter Posts',
  props<{
    flterKeyword: string
  }>()
)

export const fetchNextPagePosts = createAction(
  '[Post] Fetch Next Page Posts',
)
