import { combineReducers } from "redux";
import cardListReducer from "./cardListReducer";
import teamUsersReducer from "./teamUsersReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  cardList: cardListReducer,
  teamUsers: teamUsersReducer,
});
