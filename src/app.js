import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Krishan"
    };
  }

  handleClick = e => {
    this.setState({
      name: "Krishan Goel"
    });
  };

  render() {
    return (
      <div>
        <div>This is my component</div>
        <h1>This is {this.state.name}</h1>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
        <img src="https://dummyimage.com/600x400/000/fff" />
      </div>
    );
  }
}

export default App;
