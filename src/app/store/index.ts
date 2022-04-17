import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { configFeatureKey, configReducer } from './config/config.reducer';
import { postFeatureKey, postReducer } from './post/post.reducer';

export interface IState {

}

export const reducers: ActionReducerMap<IState> = {
  [postFeatureKey]: postReducer,
  [configFeatureKey]: configReducer
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
