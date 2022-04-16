import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { routes } from 'src/app/router/routes';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    IndexComponent,
    PostComponent,
    NavbarComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
