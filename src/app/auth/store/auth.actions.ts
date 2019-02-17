import {Action} from '@ngrx/store';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySingup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: {username: string, password: string}) {}
}

export class TrySingin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: {username: string, password: string}) {}
}

export class Singup implements Action {
  readonly type = SIGNUP;
}

export class Singin implements Action {
  readonly type = SIGNIN;
}

export class Logout implements Action{
  readonly type = LOGOUT;
}

export class SetToken implements Action{
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions = Singup | Singin | Logout | SetToken | TrySingup | TrySingin;
