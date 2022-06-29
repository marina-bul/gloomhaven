import { store } from "../../store";

const teamUsersReducer = (state = store, action) => {
  return state.team;
};

export default teamUsersReducer;
