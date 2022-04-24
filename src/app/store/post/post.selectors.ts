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

// Used for filter posts in the postList on homepage
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

export const searchPosts = (keyword: string) => createSelector(
  selectPostState,
  (state: IPostState) => {

    let posts: IPost[] = [];

    if (keyword === '') {
      posts = [];
    } else {
      posts = state.posts.filter((post) => post.description?.includes(keyword))
    }

    return posts;

  }
)

export const selectCurrentPage = createSelector(
  selectPostState,
  (state: IPostState) => {
    return state.currentPage;
  }
)

export const selectItemsPerPage = createSelector(
  selectPostState,
  (state: IPostState) => {
    return state.perPage;
  }
)
