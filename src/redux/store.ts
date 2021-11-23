import {createStore, Store} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";

export const configStore = (): Store=>{
    const store = createStore(rootReducer, composeWithDevTools());
    return store;
}