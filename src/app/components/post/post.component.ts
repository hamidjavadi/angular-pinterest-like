import { Component, Input, OnInit } from '@angular/core';
import { faArrowUpFromBracket, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { IPost } from 'src/app/types/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: IPost;
  show: boolean = false;
  fade: boolean = false;

  // Fontawesome Iconsi
  iconEllipsis = faEllipsis;
  iconShare = faArrowUpFromBracket;

  showSetTimeoutHandler: any;
  fadeSetTimeoutHandler: any;

  // This part is temporary code
  showAuthorRandomState: boolean = Math.random() < 0.5 ? false : true;
  showReactionsRandomState: boolean = Math.random() < 0.5 ? false : true;
  showReacitonAngryRandomState: boolean = Math.random() < 0.5 ? false : true;
  showReacitonGrinRandomState: boolean = Math.random() < 0.5 ? false : true;
  showReacitonHeartRandomState: boolean = Math.random() < 0.5 ? false : true;
  showReactionCountState: boolean = this.showReacitonAngryRandomState || this.showReacitonGrinRandomState || this.showReacitonHeartRandomState;
  reactionCount: number = Math.floor(Math.random() * 1000);

  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter() {
    clearTimeout(this.showSetTimeoutHandler);
    clearTimeout(this.fadeSetTimeoutHandler);

    this.show = true;

    this.showSetTimeoutHandler = setTimeout(() => {
      this.fade = true;
    }, 10);
  }

  mouseLeave() {
    this.fade = false;

    this.fadeSetTimeoutHandler = setTimeout(() => {
      this.show = false;
    }, 100);
  }

}
