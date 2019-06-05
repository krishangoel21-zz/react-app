import React from "react";

class JSX extends React.Component {
  formatname = user => {
    return `Super ${user}`;
  }; //method

  render() {
    const ele = <h1>Hello world</h1>; //example1
    const name = "krishna Goel";

    const ele1 = <h1>Hello {name}</h1>; //example2

    const ele2 = <h1>Hello {this.formatname("krishan")}</h1>; //example3
    
    const myuser = {
      avtar: "https://via.placeholder.com/100"
    };
    const ele3 = <img src={myuser.avtar} />; //example3

    return (
      <div>
        This is JSX example {ele} {ele1} {ele2} {ele3}
      </div>
    );
  }
}

export default JSX;
