import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import {
  LoginSessionUserAction, LoginSessionUserCompleteAction, LoginSessionUserFailAction,
  LogoutSessionUserAction, LogoutSessionUserCompleteAction, LogoutSessionUserFailAction
} from '@core/store/session-user/session-user.actions';

import { SessionUserModel } from '@core/model/session-user.model';

export interface SessionUserState {
  isLoading: boolean;
  isLoggedIn: boolean;
  errorMsg?: string | null;
  sessionUser: SessionUserModel;
}

export const initialSessionUserState: SessionUserState = {
  isLoading: false,
  isLoggedIn: false,
  sessionUser: {
    id: null,
  }
};

const sessionUserReducerInternal = createReducer(
  initialSessionUserState,

  on(LoginSessionUserAction, (state) => ({
    ...state,
    isLoading: true,
    errorMsg: null
  })),

  on(LoginSessionUserCompleteAction, (state, { sessionUser }) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    errorMsg: null,
    sessionUser
  })),

  on(LoginSessionUserFailAction, (state, { error }) => {
    console.log('in LoginSessionUserFailReducer', error);
    return ({
      ...state,
      isLoading: false,
      errorMsg: error.message
    });
  }),

  on(LogoutSessionUserAction, (state) => ({
    ...state,
    isLoading: true,
    errorMsg: null
  })),

  on(LogoutSessionUserCompleteAction, (state) => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    errorMsg: null
  })),

  on(LogoutSessionUserFailAction, (state, { error }) => {
    console.log('in LogoutSessionUserFailReducer', error);
    return ({
      ...state,
      isLoading: false,
      errorMsg: error.message
    });
  })
);

export const sessionUserReducer = (state = initialSessionUserState, action: Action) =>
  sessionUserReducerInternal(state, action);

export const selectFeature = createFeatureSelector<any, SessionUserState>('sessionUser');

export const selectIsLoading = createSelector(
  selectFeature,
  (state: SessionUserState) => state.isLoading
);

export const selectIsLoggedIn = createSelector(
  selectFeature,
  (state: SessionUserState) => state.isLoggedIn
);

export const selectSessionUser = createSelector(
  selectFeature,
  (state: SessionUserState) => state.sessionUser
);

export const selectErrorMsg = createSelector(
  selectFeature,
  (state: SessionUserState) => state.errorMsg
);
