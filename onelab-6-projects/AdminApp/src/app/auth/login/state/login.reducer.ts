import { createReducer, on, Action, State } from '@ngrx/store';
import { Login, LoginSuccess, LoginError } from './login.actions';
export const initialState =
{
    loading:false,
    isLoggedIn:false
};

interface loginState {
    loading:boolean;
    isLoggedIn:boolean;
}

const _loginReducer = createReducer(initialState,
      on(Login, state => ({loading:true,isLoggedIn:false})),
      on (LoginSuccess, state =>({loading:false,isLoggedIn:true})),
      on (LoginError, state =>({loading:false,isLoggedIn:false}))
    )
    export function loginReducer ( state: loginState | undefined, action:Action ) {
        return _loginReducer(state, action);
      }
      