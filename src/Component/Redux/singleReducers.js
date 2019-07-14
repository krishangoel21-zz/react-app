import { createStore } from "redux";

const reducer = function(state = "goel", action) {
  if (action.type === "USER_NAME") {
    return action.payload + state;
  }
  if (action.type === "USER_AGE") {
    return action.payload;
  }
  return state;
};



const store = createStore(reducer);

store.subscribe(() => {
  console.warn("My store has changed", store.getState());
}); // TO listing the action changes in store

// action creaters
function userName() {
  return { type: "USER_NAME", payload: "krishan" };
}

// action creaters
function userAge() {
  return { type: "USER_AGE", payload: 24 };
}

store.dispatch(userName());

store.dispatch(userAge());
