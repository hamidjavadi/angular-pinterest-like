import { createFeatureSelector, createSelector } from '@ngrx/store';
import { configFeatureKey } from './config.reducer';
import { IConfigState } from './types';

export const selectConfigState = createFeatureSelector<IConfigState>(
  configFeatureKey
);

export const selectApiUrl = createSelector(
  selectConfigState,
  (state: IConfigState) => {
    return state.api.url
  }
)
