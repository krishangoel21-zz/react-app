import React from "react";
import { Router } from "@reach/router";
/* import Todo from "./Todo";
import Async from "./Async";
import Timer from "./Timer";
import { AnotherFunctionalComponent } from "./ClassFunctionalComponent"; // this is for multiple export file through object
import ClassFunctionalComponent from "./ClassFunctionalComponent"; // this for export default file
import JSX from "./JSX"; */
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Product from "./Component/Product";
class App extends React.Component {
  render() {
    return (
      <div>
        {/*         <Todo />
        <Async />
        <Timer />
        <ClassFunctionalComponent />
        <AnotherFunctionalComponent />
        <JSX /> */}
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact-us" />
          <Product path="/product" />
        </Router>
      </div>
    );
  }
}

export default App;
