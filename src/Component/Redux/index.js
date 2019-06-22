import { createStore } from "redux";

const reducer = function(state = {}, action) {
  return state;
};

const store = createStore(reducer, {});

store.subscribe(() => {
  console.warn("My store has changed", store.getState());
});

store.dispatch({
  type: "USER_NAME",
  payload: "krishan"
});
