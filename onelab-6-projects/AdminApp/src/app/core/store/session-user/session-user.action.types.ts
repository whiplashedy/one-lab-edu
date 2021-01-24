export enum SessionUserActionTypes {
  GET               = '[SESSION USER] Get user',

  LOGIN             = '[SESSION USER] Login user',
  LOGIN_COMPLETE    = '[SESSION USER] Login user complete',
  LOGIN_FAIL        = '[SESSION USER] Login user fail',

  LOGOUT            = '[SESSION USER] Logout user',
  LOGOUT_COMPLETE   = '[SESSION USER] Logout user complete',
  LOGOUT_FAIL       = '[SESSION USER] Logout user fail',
}
