import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postFeatureKey } from './post.reducer';
import { IPostState } from './types';

export const selectPostState = createFeatureSelector<IPostState>(
  postFeatureKey
);

export const selectPostListLoadingState = createSelector(
  selectPostState,
  (state: IPostState) => {
    return state.isLoading
  }
)


export const selectPosts = createSelector(
  selectPostState,
  (state: IPostState) => state.posts
)
