import React from "react";
import Home from "../Component/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>THis is new example of componentDidMount() Lifecyle method.</h3>
        <p>This Lifecyle method best place to fetch data from the server.</p>
        <Home />
      </div>
    );
  }
}

export default App;
