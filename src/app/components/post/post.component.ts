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

  iconEllipsis = faEllipsis;
  iconShare = faArrowUpFromBracket;

  showSetTimeoutHandler: any;
  fadeSetTimeoutHandler: any;

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
