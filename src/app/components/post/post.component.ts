import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/types/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}