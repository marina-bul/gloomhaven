import {
  FETCH_CARD_LIST,
  FETCH_CARD_LIST_REJECT,
  FETCH_CARD_LIST_RESOLVE,
} from "./actionTypes";

export const cardListAction = () => {
  return {
    type: FETCH_CARD_LIST,
  };
};

export const cardListResolveAction = (payload) => {
  return {
    type: FETCH_CARD_LIST_RESOLVE,
    payload: payload,
  };
};

export const cardListRejectAction = (err) => {
  return {
    type: FETCH_CARD_LIST_REJECT,
    err: err,
  };
};

export const fetchCardList = (getData) => {
  return (dispatch, getState) => {
    dispatch(cardListAction());
    getData()
      .once("value")
      .then((res) => {
        dispatch(cardListResolveAction(res.val()));
      })
      .catch((err) => dispatch(cardListRejectAction(err)));
  };
};
