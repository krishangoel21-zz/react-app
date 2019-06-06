import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "krishan"
    };
  }

  //getDerivedStateFromProps lifecycle called before render method with two parameter props and state if
  // there is any change in props and state is called again,

  static getDerivedStateFromProps(props, state) {
    console.warn("getDerivedStateFromProps is called ");
    console.warn("state", state);
    return null;
  }

  //forceUpdate is use to re-render the dom on changing props or state
  handleClick = () => {
    this.forceUpdate(() => {
      console.warn("updating...");
      this.setState({ name: "goel" });
    });
  };
  render() {
    console.warn("render is called ");
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default Home;
