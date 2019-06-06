import React from "react";
/*import Home from "../Component/Home";*/

import  ShouldUpdate  from "../Component/ShouldUpdate";

class App extends React.Component {
  render() {
    return (
      <div>
        THis is new Component
        {/* <Home data="king" /> */}
        <ShouldUpdate />
      </div>
    );
  }
}

export default App;
