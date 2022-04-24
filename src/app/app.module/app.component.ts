import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { ScrollService } from '../services/scroll/scroll.service';
import isMobile from '../utils/isMobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pinterest';

  constructor(
    private postService: PostService,
    private scrollService: ScrollService,
  ) { }

  ngOnInit() {

    // Fetch the posts when the application started at first time
    this.postService.fetchPosts(0);

    this.scrollService.startMonitoringScrollPosition();

    if (isMobile) {
      this.scrollService.startMonitoringDirection();
    }
  }

  ngOnDestroy() {

    this.scrollService.stopMonitoringScrollPosition();

    if (isMobile) {
      this.scrollService.stopMonitoringDirection();
    }
  }

}
