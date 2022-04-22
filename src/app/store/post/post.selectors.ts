import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPost } from 'src/app/types/post';
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
  (state: IPostState) => {

    let posts: IPost[] = [];

    if (state.filterKeyword === '') {
      posts = state.posts
    } else {

      posts = state.posts.filter((post, index) => {
        return post.description?.includes(state.filterKeyword);
      })

    }

    return posts;
  }
)
