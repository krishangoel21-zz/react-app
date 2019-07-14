import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"; //optional
const initialState = {
  loading: false,
  loaded: false,
  error: null,
  posts: []
};

const middleware = applyMiddleware(thunk, logger);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "LOADING":
      state = { ...state, loading: true };
      break;
    case "LOADED":
      state = { ...state, loaded: true, loading: false, posts: action.payload };
      break;
    case "ERROR":
      state = { ...state, loaded: true, loading: false, error: action.payload };
      break;
  }
  return state;
};

const store = createStore(reducer, initialState, middleware);

const getData = dispatch => {
  dispatch({ type: "LOADING" });
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(jsonData => {
      dispatch({ type: "LOADED", payload: jsonData });
    })
    .catch(err => {
      dispatch({ type: "ERROR", error: err });
    });
};

store.dispatch(getData);
