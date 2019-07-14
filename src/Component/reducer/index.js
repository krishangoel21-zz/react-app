/* const reducer = (state = {}, action) => {
  switch (action.type) {
    case "LOADING":
      state = { ...state, loading: true };
      break;
    case "LOADED":
      state = {
        ...state,
        loaded: true,
        loading: false,
        products: action.payload
      };
      break;
    case "ERROR":
      state = { ...state, loaded: true, loading: false, error: action.payload };
      break;
  }
  return state;
};

export default reducer; */
