import { combineReducers } from "redux";
import cardListReducer from "./cardListReducer";
import counterReducer from "./counter";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  counter: counterReducer,
  cardList: cardListReducer,
});
