import React from "react";
import Todo from "./Todo";
import Async from "./Async";

class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <Async />
      </div>
    );
  }
}

export default App;
