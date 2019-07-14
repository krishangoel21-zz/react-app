/* export const getProducts = dispatch => {
  dispatch({ type: "LOADING" });
  fetch("http://localhost:6060/api")
    .then(response => response.json())
    .then(jsonData => {
      dispatch({ type: "LOADED", payload: jsonData });
    })
    .catch(err => {
      dispatch({ type: "ERROR", error: err });
    });
}; */

//store.dispatch(getData);
