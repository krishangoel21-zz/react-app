import React from "react";

const FunctionalComponent = () => {
  return <div>This is Functional Component</div>;
};

export const AnotherFunctionalComponent = () => {
  return <div>This is Another Functional Component</div>;
};

class ClassFunctionalComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>This is Class Component</div>
        <FunctionalComponent />
      </React.Fragment>
    );
  }
}

export default ClassFunctionalComponent;
