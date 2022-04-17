import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPosts } from 'src/app/store/post/post.selectors';
import { IPost } from 'src/app/types/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: IPost[] = [];

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectPosts).subscribe(posts => this.posts = posts);
  }

}
