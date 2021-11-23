import {Action} from "redux"

export type userState = {
    info:{
        userName?: string,
        email?: string,
    }
    token?: string
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export interface userLogin extends Action {
    type: typeof LOGIN_SUCCESS,
    payload: userState
}
export interface userLogout extends Action {
    type: typeof LOGOUT_SUCCESS,
}

export type userAction = userLogin;

