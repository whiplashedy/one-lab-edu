import { createReducer, on } from '@ngrx/store';
import { Login, LoginSuccess, LoginError } from './login.actions';

export const initialState = {
  loading: false
};

const _loginReducer = createReducer(initialState,
  on(Login, state => ({loading: true})),
  on(LoginSuccess, state => ({loading: false})),
  on(LoginError, state => ({loading: false})),
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}
