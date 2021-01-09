import { User } from '../../models/user';
import {LoginActionTypes, All} from '../actions/login.actions';


export interface State {
  isAuthenticated: boolean;

  user: User | null;

  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case LoginActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    default: {
      return state;
    }
  }
}

