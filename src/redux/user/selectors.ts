import { createSelector } from "reselect";
import { rootState } from "../reducer";

const userSelector = (state:rootState)=>state.user;

export const getUserInfo = createSelector(
    userSelector,
    (user)=>user.info
);

export const getUserToken = createSelector(
    userSelector,
    (user)=>user.token
);