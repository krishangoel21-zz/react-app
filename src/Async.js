import React from "react";

class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: "This is Krishan Goel and I am Software Enginer"
    };
  }
  changeText = e => {
    this.setState({
      work: e.target.value
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.work} </p>
        <form>
          <textarea onChange={this.changeText} value={this.state.work} />
        </form>
      </div>
    );
  }
}

export default Async;
