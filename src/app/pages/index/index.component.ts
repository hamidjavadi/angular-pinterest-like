import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from 'src/app/services/post.service';
import { selectPostListLoadingState } from 'src/app/store/post/post.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    private postService: PostService,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.store.select(selectPostListLoadingState).subscribe(status => this.isLoading = status);

    this.postService.fetchPosts();
  }

}
