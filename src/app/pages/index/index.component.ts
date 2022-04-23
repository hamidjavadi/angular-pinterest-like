import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from 'src/app/services/post/post.service';
import { selectPostListLoadingState } from 'src/app/store/post/post.selectors';
import isMobile from 'src/app/utils/isMobile';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    private el: ElementRef,
    private postService: PostService,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.setupNavbar();

    this.store.select(selectPostListLoadingState).subscribe(status => this.isLoading = status);
    this.postService.fetchPosts(20);
  }

  setupNavbar() {
    const indexpage: HTMLElement = <HTMLElement>this.el.nativeElement;
    const postContainer = indexpage.querySelector('#post-container');

    // Set if the device is mobile
    if (isMobile) {
      postContainer!.setAttribute('is-mobile', '');
    }
  }

}
