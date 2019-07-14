import { createStore, combineReducers } from "redux";

//conbineReducers use to combine 2 or more reducers

//3) Reducer gets the action on the baises of type of action and goes and create new state with updated values
const reducerUser = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      state = { ...state, name: action.payload };
      break;
    case "GET_USERAGE":
      state = { ...state, age: action.payload };
      break;
  }
  return state;
};
const reducerJobProfile = (state = {}, action) => {
  switch (action.type) {
    case "GET_JOBDETAIL":
      state = { ...state, title: action.payload };
      break;
  }
  return state;
};

const reducer = combineReducers({
  UserDetails: reducerUser,
  JobDetails: reducerJobProfile
});

const store = createStore(reducer);

store.subscribe(() => {
  console.warn(store.getState());
});

//4) We are listing store if the values goes changed.

//1) We creating action using action creators  returning a synchronous action.
//For asynchronous action we need to use middleware like redux thunk

function getUsername() {
  return {
    type: "GET_USERNAME",
    payload: "Krishan"
  };
}
function getUserAge() {
  return {
    type: "GET_USERAGE",
    payload: "29"
  };
}
function getJobDetail() {
  return {
    type: "GET_JOBDETAIL",
    payload: "WEB DEVELOPER"
  };
}

//2) Action is dispatch
store.dispatch(getUsername());
store.dispatch(getUserAge());
store.dispatch(getJobDetail());
