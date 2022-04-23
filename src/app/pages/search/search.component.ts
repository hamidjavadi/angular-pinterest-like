import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { searchPosts } from 'src/app/store/post/post.selectors';
import { IPost } from 'src/app/types/post';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Fontawesome icons
  searchIcon: IconDefinition = faSearch;
  cancelIcon: IconDefinition = faTimesCircle;

  keyword: string = '';
  posts: IPost[] = [];

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancelSearch() {
    if (this.keyword !== '') {
      this.keyword = '';
    } else {
      this.router.navigateByUrl('/');
    }
  }

  clearSearch() {
    this.keyword = '';
    this.keywordChanged();
  }

  keywordChanged() {
    this.store.select(searchPosts(this.keyword)).subscribe(posts => {
      this.posts = posts;
    });
  }

}
