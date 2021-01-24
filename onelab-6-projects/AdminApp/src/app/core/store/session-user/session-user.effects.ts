import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { SessionUserActionTypes } from '@core/store/session-user/session-user.action.types';
import {
  LoginSessionUserFailAction, LoginSessionUserCompleteAction,
  LogoutSessionUserCompleteAction, LogoutSessionUserFailAction
} from '@core/store/session-user/session-user.actions';

import { AuthenticationService } from '@core/services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class SessionUserEffects {

  loginSessionUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionUserActionTypes.LOGIN),
      map(({ email, password }) => {
        return {
          email,
          password
        };
      }),
      exhaustMap((userCredentials) => from(this.authService.login(userCredentials.email, userCredentials.password))
        .pipe(
          map(authState => {
            const sessionUser = {
              id: authState.user?.uid
            };
            return LoginSessionUserCompleteAction( { sessionUser } );
          }),
          catchError((error) => {
            console.log('in LoginSessionUserEffects', error);
            return of(LoginSessionUserFailAction( { error }));
          })
        )
      ),
    )
  );

  logoutSessionUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionUserActionTypes.LOGOUT),
      exhaustMap(() => from(this.authService.logout())
        .pipe(
          map(p => LogoutSessionUserCompleteAction()),
          catchError((error) => {
            console.log('in LogoutSessionUserEffects', error);
            return of(LogoutSessionUserFailAction( { error }));
          })
        )),
      )
  );

  loginSessionUserComplete$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SessionUserActionTypes.LOGIN_COMPLETE),
        exhaustMap(() => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );

  logoutSessionUserComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionUserActionTypes.LOGOUT_COMPLETE),
      exhaustMap(() => this.router.navigate(['/auth']))
    ),
    { dispatch: false }
    );

  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(action => console.log('effects logger', action))
    ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) {}
}
