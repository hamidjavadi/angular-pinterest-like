import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentPage, selectItemsPerPage } from 'src/app/store/post/post.selectors';
import { selectApiUrl } from '../../store/config/config.selectors';
import * as postActions from '../../store/post/post.actions'
import { IPost } from '../../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  currentPage: number = -1;
  itemsPerPage: number = -1;

  constructor(
    private httpClient: HttpClient,
    private store: Store
  ) {

    this.store.select(selectCurrentPage).subscribe((currentPage) => this.currentPage = currentPage);
    this.store.select(selectItemsPerPage).subscribe((itemsPerPage) => this.itemsPerPage = itemsPerPage);

  }

  fetchPosts(page: number) {
    try {

      console.log('fetchPosts');

      this.store.dispatch(postActions.fetchPosts({ isLoading: true }));
      this.store.select(selectApiUrl).subscribe(apiUrl => {

        this.httpClient.get(
          apiUrl,
          {
            params: {
              offset: page * this.itemsPerPage
            }
          }
        ).subscribe(result => {

          let posts = result as Array<IPost>;

          this.store.dispatch(postActions.fetchPostsSuccess({
            currentPage: page,
            isLoading: false,
            posts: posts
          }));
        });
      });

    } catch (error) {
      console.log(error);
    }
  }

  fetchNextPagePosts() {
    try {
      console.log('fetchNextPagePosts');

      this.fetchPosts(this.currentPage + 1);
    } catch (error) {
      console.log(error)
    }
  }

  filterPosts(keyword: string = '') {
    this.store.dispatch(postActions.filterPosts({ flterKeyword: keyword }));
  }

}
