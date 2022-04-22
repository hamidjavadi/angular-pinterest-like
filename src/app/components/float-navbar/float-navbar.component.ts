import { Component, ElementRef, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt, faCommentDots, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import isMobile from 'src/app/utils/isMobile';

@Component({
  selector: 'app-float-navbar',
  templateUrl: './float-navbar.component.html',
  styleUrls: ['./float-navbar.component.scss']
})
export class FloatNavbarComponent implements OnInit {

  // Fontawesome icons
  homeIcon: IconDefinition = faHome;
  searchIcon: IconDefinition = faSearch;
  commentIcon: IconDefinition = faCommentDots;

  isMobile: boolean = false;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.isMobile = isMobile;
  }

}
