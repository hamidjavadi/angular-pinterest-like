import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey } from './app.reducer';
import { IAppState } from './types';

export const selectAppState = createFeatureSelector<IAppState>(
  appFeatureKey
);

export const scrollDirectionSelector = createSelector(
  selectAppState,
  (state: IAppState) => {
    return state.scrollDirection
  }
)
