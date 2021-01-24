import { createAction, props } from '@ngrx/store';
import { SessionUserActionTypes } from '@core/store/session-user/session-user.action.types';
import { SessionUserModel } from '@core/model/session-user.model';

export const LoginSessionUserAction = createAction(
  SessionUserActionTypes.LOGIN,
  props<{ email: string, password: string }>()
);

export const LoginSessionUserCompleteAction = createAction(
  SessionUserActionTypes.LOGIN_COMPLETE,
  props<{ sessionUser: SessionUserModel }>()
);

export const LoginSessionUserFailAction = createAction(
  SessionUserActionTypes.LOGIN_FAIL,
  props<{ error: Error }>()
);

export const LogoutSessionUserAction = createAction(
  SessionUserActionTypes.LOGOUT
);

export const LogoutSessionUserCompleteAction = createAction(
  SessionUserActionTypes.LOGOUT_COMPLETE
);

export const LogoutSessionUserFailAction = createAction(
  SessionUserActionTypes.LOGOUT_FAIL,
  props<{ error: Error }>()
);
