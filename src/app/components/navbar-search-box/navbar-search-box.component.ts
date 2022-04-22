import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes, faTimesCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar-search-box',
  templateUrl: './navbar-search-box.component.html',
  styleUrls: ['./navbar-search-box.component.scss']
})
export class NavbarSearchBoxComponent implements OnInit {

  // Fontawesome
  searchIcon: IconDefinition = faSearch;
  timesIcon: IconDefinition = faTimesCircle;

  keyword: string = ''
  searchBoxActivated: boolean = false;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  activateSearchBox() {
    this.searchBoxActivated = true;
  }

  deactivateSearchBox() {
    this.searchBoxActivated = false;
  }

  keywordChanged(event?: Event) {
    this.postService.filterPosts(this.keyword);
  }

  resetKeyword() {
    this.keyword = '';
    this.keywordChanged();
  }

}
