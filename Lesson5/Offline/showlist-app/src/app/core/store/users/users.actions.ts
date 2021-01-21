import { createAction, props } from '@ngrx/store';
import { UsersActionTypes } from '@core/store/users/users.action.types';
import { User } from '@data/models/user.model';

export const AddUserAction = createAction(
  UsersActionTypes.ADD_USER,
  props<{ user: User }>()
);

export const RemoveUserAction = createAction(
  UsersActionTypes.REMOVE_USER,
  props<{ user: User }>()
);

export const LoadUsersAction = createAction(
  UsersActionTypes.LOAD_USERS
);

export const LoadUsersSuccessfulAction = createAction(
  UsersActionTypes.LOAD_USERS_SUCCESSFUL,
  props<{ users: Array<User> }>()
);

export const LoadUsersFailedAction = createAction(
  UsersActionTypes.LOAD_USERS_FAILED,
  props<{ error: Error }>()
);
