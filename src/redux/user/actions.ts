import {LOGIN_SUCCESS, LOGOUT_SUCCESS, userLogin, userLogout, userState} from "./types"

export const loginSuccess=(newState:userState):userLogin=>{
    return {
        type:LOGIN_SUCCESS,
        payload:newState
    }
}

export const logOutSuccess=():userLogout=>{
    return {
        type:LOGOUT_SUCCESS,
    }
}