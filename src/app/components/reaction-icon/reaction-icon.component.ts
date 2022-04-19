import { Component, Input, OnInit } from '@angular/core';
import { faFaceAngry, faFaceGrin, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-reaction-icon',
  templateUrl: './reaction-icon.component.html',
  styleUrls: ['./reaction-icon.component.scss']
})
export class ReactionIconComponent implements OnInit {

  @Input() type: string = '';
  reacionIcon!: IconDefinition;

  constructor() { }

  ngOnInit(): void {
    switch (this.type) {
      case 'angry':
        this.reacionIcon = faFaceAngry;
        break;
      case 'grin':
        this.reacionIcon = faFaceGrin;
        break;
      case 'heart':
        this.reacionIcon = faHeart;
        break;
      default:
        break;
    }
  }


}
