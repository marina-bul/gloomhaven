import {
  FETCH_TEAM_USERS,
  FETCH_TEAM_USERS_REJECT,
  FETCH_TEAM_USERS_RESOLVE,
} from "../actions/actionTypes";

const teamUsersReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TEAM_USERS:
      return {
        payload: [],
        err: null,
        isBusy: true,
      };
    case FETCH_TEAM_USERS_RESOLVE:
      return {
        payload: action.payload,
        err: null,
        isBusy: false,
      };
    case FETCH_TEAM_USERS_REJECT:
      return {
        payload: null,
        err: action.err,
        isBusy: false,
      };
    default:
      return {
        payload: null,
        err: null,
        isBusy: false,
      };
  }
};

export default teamUsersReducer;
