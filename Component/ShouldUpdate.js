import React from "react";

class ShouldUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  /*  if we are getting data from some api and data will remain same or not change but render funtion 
   renderd again and agian to stop this thing we need to use shouldComponentUpdate(). 
 This will take two agruments nextSate/nextProps */

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: 1
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextSate) {
    // default true
    //console.log("State", nextSate, this.state);
    if (nextSate.time === this.state.time) {
      return false;
    } else {
      //  console.log("new render");
      return true;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // console.log("rendered", this.state);
    return <div>This is shoould ShouldUpdate</div>;
  }
}

export default ShouldUpdate;
