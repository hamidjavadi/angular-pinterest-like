import { Action, createReducer, on } from '@ngrx/store';
import * as ConfigActions from './config.actions';
import { IConfigState } from './types';

export const configFeatureKey = 'config';

export const initialState: IConfigState = {
  api: {
    url: "http://xoosha.com/ws/1/test.php"
  }
};

export const configReducer = createReducer(
  initialState,

  on(ConfigActions.configConfigs, state => state),
  on(ConfigActions.configConfigsSuccess, (state, action) => state),
  on(ConfigActions.configConfigsFailure, (state, action) => state),

);
