import React from "react";
import Todo from "./Todo";
import Async from "./Async";
import Timer from "./Timer";
class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <Async />
        <Timer />
      </div>
    );
  }
}

export default App;
