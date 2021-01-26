import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, catchError, exhaustMap, tap, switchMap, finalize } from 'rxjs/operators';
import { SessionUserActionType } from '@core/store/session-user/session-user.action.type';
import {
  LoginSessionUserFailAction, LoginSessionUserCompleteAction,
  LogoutSessionUserCompleteAction, LogoutSessionUserFailAction,
  LoadSessionUserAction, LoadSessionUserCompleteAction, LoadSessionUserFailAction
} from '@core/store/session-user/session-user.action';

import { AuthenticationService } from '@core/service/authentication.service';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';

@Injectable()
export class SessionUserEffect implements OnInitEffects {

  loadSessionUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionUserActionType.LOAD),
      switchMap(() => this.authService.user$
        .pipe(
          map(user => {
            if (user) {
              const sessionUser = {
                id: user.uid
              };
              return LoadSessionUserCompleteAction( { sessionUser } );
            } else {
              return LoadSessionUserFailAction();
            }
          }),
          catchError((error) => of(LoadSessionUserFailAction())),
          finalize(() => console.warn('load session user is finalized'))
        ))
    )
  );

  loginSessionUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionUserActionType.LOGIN),
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
            return of(LoginSessionUserFailAction( { error }));
          })
        )
      ),
    )
  );

  logoutSessionUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionUserActionType.LOGOUT),
      exhaustMap(() => from(this.authService.logout())
        .pipe(
          map(p => LogoutSessionUserCompleteAction()),
          catchError((error) => {
            return of(LogoutSessionUserFailAction( { error }));
          })
        )),
      )
  );

  loginSessionUserComplete$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SessionUserActionType.LOGIN_COMPLETE, SessionUserActionType.LOAD_COMPLETE),
        exhaustMap(() => this.router.navigate(['/home']))
      ),
    { dispatch: false }
  );

  logoutSessionUserComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionUserActionType.LOGOUT_COMPLETE, SessionUserActionType.LOAD_FAIL),
      exhaustMap(() => this.router.navigate(['/auth']))
    ),
    { dispatch: false }
    );

  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(action => {
        // console.log('|EFFECTS LOGGER|', action);
      }),
    ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngrxOnInitEffects(): Action {
    return LoadSessionUserAction();
  }
}
