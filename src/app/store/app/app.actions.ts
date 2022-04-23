import { createAction, props } from '@ngrx/store';
import { scrollVerticalDirection } from './types';

export const setScrollDirection = createAction(
  '[App] Set Scroll Direction',
  props<{
    scrollDirection: scrollVerticalDirection
  }>()
)
