import { Component, OnInit } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-search-box',
  templateUrl: './navbar-search-box.component.html',
  styleUrls: ['./navbar-search-box.component.scss']
})
export class NavbarSearchBoxComponent implements OnInit {

  keyword: string = ''
  searchIcon: IconDefinition = faSearch;
  searchBoxActivated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateSearchBox() {
    this.searchBoxActivated = true;
  }

  deactivateSearchBox() {
    this.searchBoxActivated = false;
  }

  keywordChanged() {
    console.log(this.keyword);
  }

}
