import { store } from "../../store";

const cardListReducer = (state = store, action) => {
  return state.scenes;
};

export default cardListReducer;
