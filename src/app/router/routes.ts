import { Routes } from "@angular/router";
import { IndexComponent } from "../pages/index/index.component";
import { SearchComponent } from "../pages/search/search.component";

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'search', component: SearchComponent },
];
