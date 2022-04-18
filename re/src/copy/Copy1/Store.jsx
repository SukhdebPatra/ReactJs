import { createStore } from "redux";
import { messageReducer } from "./Message.reducer";

let store = createStore (messageReducer);

export {store}