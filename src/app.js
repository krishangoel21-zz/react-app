import React from "react";
/*import Home from "../Component/Home";*/

/* import  ShouldUpdate  from "../Component/ShouldUpdate"; */

class App extends React.Component {
  componentDidMount() {
    console.warn("Fetching data...");
  }

  render() {
    console.warn("rendering...");
    return (
      <div>
        THis is new Component
        {/* <Home data="king" /> */}
        {/*  <ShouldUpdate /> */}
      </div>
    );
  }
}

export default App;
