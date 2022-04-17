import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectApiUrl } from '../store/config/config.selectors';
import * as postActions from '../store/post/post.actions'
import { IPost } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private httpClient: HttpClient,
    private store: Store
  ) { }


  fetchPosts() {
    try {

      this.store.dispatch(postActions.fetchPosts({ isLoading: true }));

      this.store.select(selectApiUrl).subscribe(apiUrl => {

        this.httpClient.get(
          apiUrl,
          {
            params: {
              offset: 1
            }
          }
        ).subscribe(result => {

          let alsfjladfj = result as Array<IPost>;

          this.store.dispatch(postActions.fetchPostsSuccess({
            isLoading: false,
            posts: alsfjladfj
          }))
          console.log(result);
        });
      });

    } catch (error) {
      console.log(error);
    }
  }


}
