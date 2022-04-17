import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import { IPostState } from './types';

export const postFeatureKey = 'posts';

export const initialState: IPostState = {
  currentPage: -1,
  isLoading: false,
  perPage: 60,
  posts: [],
  total: 0,
};

export const postReducer = createReducer(
  initialState,
  on(PostActions.fetchPosts, (state, action) => {
    return { ...state, isLoading: action.isLoading }
  }),
  on(PostActions.fetchPostsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
      posts: action.posts
    }
  }),
  on(PostActions.fetchPostsFailure, (state, action) => state),
);
