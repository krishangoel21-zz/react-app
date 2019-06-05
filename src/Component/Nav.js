import React from "react";
import { Link } from "@reach/router";

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/product">Product</Link>
      </React.Fragment>
    );
  }
}

export default Nav;
