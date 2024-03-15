import { createReducer, on } from "@ngrx/store";
import { UserState } from "./user.state";
import { failedLogin, login, logout, successLogin } from "./user.action";

const initialState:UserState = {
    user: null,
    token: '',
    error: ''
}

export const authReducer = createReducer(
    initialState,
    on(successLogin, (state, {user , token }) => ({ ...state,user:user,token:token })),
    on(failedLogin, (state, {error}) => ({ ...state, user : null,error:error }))
    // on(logout, (state) => ({ ...state, token: null }))
    
  );