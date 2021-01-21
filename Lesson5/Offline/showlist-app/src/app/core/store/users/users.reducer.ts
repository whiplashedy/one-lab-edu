import { Action, ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import {
  AddUserAction,
  LoadUsersAction, LoadUsersFailedAction,
  LoadUsersSuccessfulAction,
  RemoveUserAction
} from '@core/store/users/users.actions';
import { User } from '@data/models/user.model';

export interface UsersState {
  isLoading: boolean;
  users: Array<User>;
}

export const initialState: UsersState = {
  isLoading: false,
  users: []
};

const _usersReducer = createReducer(
  initialState,
  on(AddUserAction, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),

  on(RemoveUserAction, (state, { user }) => ({
    ...state,
    users: state.users.filter(_user => _user !== user)
  })),

  on(LoadUsersAction, (state) => ({
    ...state,
    isLoading: true
  })),

  on(LoadUsersSuccessfulAction, (state, { users}) => ({
    ...state,
    isLoading: false,
    users: [...users]
  })),

  on(LoadUsersFailedAction, (state, { error }) => {
    console.log('in usersReducer', error);
    return ({
      ...state,
      isLoading: false
    });
  })
);

export function usersReducer(state = initialState, action: Action) {
  return _usersReducer(state, action);
}

export const selectFeature = createFeatureSelector<any, UsersState>('users');

export const selectIsLoading = createSelector(
  selectFeature,
  (state: UsersState) => state.isLoading
);

export const selectUsers = createSelector(
  selectFeature,
  (state: UsersState) => state.users
);
