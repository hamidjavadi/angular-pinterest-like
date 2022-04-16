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
    posts: IPost[],
    isLoading: boolean
  }>()
);

export const fetchPostsFailure = createAction(
  '[Post] Fetch Posts Failure',
  props<{
    errorMessage: string,
    isLoading: boolean
  }>()
);
