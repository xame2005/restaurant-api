import {Reducer} from 'redux';
import {AnyAction} from "redux"
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, userState, userAction } from "./types"

export const initialState: userState = {info:{}, token:""};

export const userReducer: Reducer<userState, userAction> = (
    state:userState = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
        return action.payload;
    case LOGOUT_SUCCESS:
        return initialState;
    default:
        return state;
  }
}