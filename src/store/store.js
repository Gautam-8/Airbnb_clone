import { createStore } from "redux";
import { reducer } from "../reducers/reducer/reducer";
export const store =createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__());