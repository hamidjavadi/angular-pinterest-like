import { createReducer, on } from '@ngrx/store';
import { setScrollDirection } from './app.actions';
import { IAppState, scrollVerticalDirection } from './types';

export const appFeatureKey = 'app';

export const initialState: IAppState = {
  scrollDirection: scrollVerticalDirection.Up
};

export const appReducer = createReducer(
  initialState,
  on(setScrollDirection, (state, action) => {
    return {
      ...state,
      scrollDirection: action.scrollDirection
    }
  }),

);
