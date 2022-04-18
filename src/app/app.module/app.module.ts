import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { IndexComponent } from '../pages/index/index.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PostComponent } from '../components/post/post.component';
import { PostEffects } from '../store/post/post.effects';
import { PostListComponent } from '../components/post-list/post-list.component';
import { PostDetailsComponent } from '../pages/post-details/post-details.component';
import { routes } from 'src/app/router/routes';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromPost from '../store/post/post.reducer';
import { ConfigEffects } from '../store/config/config.effects';
import { IndicatorComponent } from '../components/indicator/indicator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasonryComponent } from '../components/masonry/masonry.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndicatorComponent,
    MasonryComponent,
    NavbarComponent,
    PostComponent,
    PostDetailsComponent,
    PostListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    EffectsModule.forFeature([PostEffects, ConfigEffects]),
    EffectsModule.forRoot([]),
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.postReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
