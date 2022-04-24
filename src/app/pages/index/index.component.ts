import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
// import { PostService } from 'src/app/services/post/post.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { fetchNextPagePosts } from 'src/app/store/post/post.actions';
import { selectPostListLoadingState } from 'src/app/store/post/post.selectors';
import isMobile from 'src/app/utils/isMobile';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isLoading: boolean = false;
  scrollTopEventListener!: Subscription;

  constructor(
    private el: ElementRef,
    private scrollService: ScrollService,
    private store: Store
  ) { }

  ngOnInit(): void {

    this.setupNavbar();

    this.store.select(selectPostListLoadingState).subscribe(status => this.isLoading = status);
    this.scrollTopEventListener = this.scrollService.scrollTopChangedEvent.subscribe((scrollPosition) => {

      if (scrollPosition.percent > 75) {
        if (this.isLoading === false) {
          this.store.dispatch(fetchNextPagePosts());
        }
      }
    });

  }

  setupNavbar() {
    const indexpage: HTMLElement = <HTMLElement>this.el.nativeElement;
    const postContainer = indexpage.querySelector('#post-container');

    // Set if the device is mobile
    if (isMobile) {
      postContainer!.setAttribute('is-mobile', '');
    }
  }

  ngOnDestroy() {
    this.scrollTopEventListener.unsubscribe();
  }

}
