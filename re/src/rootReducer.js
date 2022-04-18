import { combineReducers } from "redux";
import { messageReducer } from "./mesage.reducer";

let rootReducer=combineReducers({message:messageReducer})

export {rootReducer}