import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import {userState} from "./user/types";

export type rootState = {
    user: userState;
}
export const rootReducer = combineReducers<rootState>({
    user:userReducer,
});