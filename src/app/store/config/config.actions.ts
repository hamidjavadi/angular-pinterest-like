import { createAction, props } from '@ngrx/store';

export const configConfigs = createAction(
  '[Config] Config Configs'
);

export const configConfigsSuccess = createAction(
  '[Config] Config Configs Success',
  props<{ data: any }>()
);

export const configConfigsFailure = createAction(
  '[Config] Config Configs Failure',
  props<{ error: any }>()
);
