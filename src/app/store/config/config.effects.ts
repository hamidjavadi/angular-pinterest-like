import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ConfigActions from './config.actions';



@Injectable()
export class ConfigEffects {

  configConfigs$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ConfigActions.configConfigs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ConfigActions.configConfigsSuccess({ data })),
          catchError(error => of(ConfigActions.configConfigsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
