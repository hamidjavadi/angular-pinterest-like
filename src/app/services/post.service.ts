import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectApiUrl } from '../store/config/config.selectors';

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

      this.store.select(selectApiUrl).subscribe(apiUrl => {

        this.httpClient.get(
          apiUrl,
          {
            params: {
              offset: 1
            }
          }
        ).subscribe(result => {
          console.log(result);
        });
      });

    } catch (error) {
      console.log(error);
    }
  }


}
