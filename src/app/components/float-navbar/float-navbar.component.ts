import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { scrollDirectionSelector } from 'src/app/store/app/app.selectors';
import { scrollVerticalDirection } from 'src/app/store/app/types';
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

  floatNavState: boolean = true;
  isMobile: boolean = false;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.isMobile = isMobile;
    this.store.select(scrollDirectionSelector).subscribe(scrollDirection => this.floatNavState = scrollDirection == scrollVerticalDirection.Down ? true : false);
  }

}
