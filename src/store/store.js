import { createStore } from "redux";
import { reducer } from "../reducers/reducer/reducer";
export const store =createStore(reducer);