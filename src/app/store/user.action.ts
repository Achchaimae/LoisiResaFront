import { createAction, props } from '@ngrx/store';
import { User } from '../core/model/User.model';
import { loginInfo } from '../core/model/loginInfo.model';

export const login = createAction('[Auth] Login', props<{ loginInfo : loginInfo  }>());
export const register = createAction('[Auth] register', props<{ user : User }>());
export const successLogin = createAction('[Auth] SucessLogin', props<{user : User , token:string }>());
export const failedLogin = createAction('[Auth] FailedLogin', props<{ error : String }>());

export const logout = createAction('[Auth] Logout');