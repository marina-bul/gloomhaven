import {
  FETCH_TEAM_USERS,
  FETCH_TEAM_USERS_REJECT,
  FETCH_TEAM_USERS_RESOLVE,
} from "./actionTypes";

export const teamUsersAction = () => {
  return {
    type: FETCH_TEAM_USERS,
  };
};

export const teamUsersResolveAction = (payload) => {
  return {
    type: FETCH_TEAM_USERS_RESOLVE,
    payload: payload,
  };
};

export const teamUsersRejectAction = (err) => {
  return {
    type: FETCH_TEAM_USERS_REJECT,
    err: err,
  };
};

export const fetchteamUsers = (getData) => {
  return (dispatch, getState) => {
    dispatch(teamUsersAction());
    getData()
      .once("value")
      .then((res) => {
        dispatch(teamUsersResolveAction(res.val()));
      })
      .catch((err) => dispatch(teamUsersRejectAction(err)));
  };
};
