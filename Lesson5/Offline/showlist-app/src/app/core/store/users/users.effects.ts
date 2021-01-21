import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '@data/services/users.service';
import { UsersActionTypes } from '@core/store/users/users.action.types';
import { LoadUsersFailedAction, LoadUsersSuccessfulAction } from '@core/store/users/users.actions';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActionTypes.LOAD_USERS),
      mergeMap(() => this.usersService.getAll()
        .pipe(
          map(users => LoadUsersSuccessfulAction({ users })),
          catchError((error) => {
            console.log('in UsersEffects', error);
            return of(LoadUsersFailedAction( { error }));
          })
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}
