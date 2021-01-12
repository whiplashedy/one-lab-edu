import {createAction, props} from '@ngrx/store';

export const Login = createAction('[Login Component] Login', props<{ login: string; password: string }>());
export const LoginSuccess = createAction('[Login Component] Login Success');
export const LoginError = createAction('[Login Component] Login Error');