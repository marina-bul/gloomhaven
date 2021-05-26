import { combineReducers } from "redux";
import counterReducer from "./counter";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  counter: counterReducer,
});
