import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post/post.service';

import * as PostActions from './post.actions';



@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) { }

  loadNextPagePosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.fetchNextPagePosts),
    tap(() => this.postService.fetchNextPagePosts())
  ), { dispatch: false });

}
