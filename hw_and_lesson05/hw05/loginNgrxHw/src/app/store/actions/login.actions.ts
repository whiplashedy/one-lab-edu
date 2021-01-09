import { Action } from '@ngrx/store';


export enum LoginActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
}

export class LogIn implements Action {
  readonly type = LoginActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export type All =
  | LogIn
  | LogInSuccess;
