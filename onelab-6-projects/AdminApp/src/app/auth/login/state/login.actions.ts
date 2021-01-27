import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Login Page] Login',
  props<{ login: string; password: string }>()
);
export const LoginSuccess = createAction(

    '[Login page] Login Success'


);
export const LoginError = createAction(

    '[Login page] Login Error'
)