import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRecordes: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:6060/api/count")
      .then(res => res.json())
      .then(result => {
        this.setState({
          numberOfRecordes: result[0].count
        });
      });
  }

  render() {
    return (
      <ul className="pagination pagination-sm">
        <li className="page-item">
          <a className="page-link">First</a>
        </li>
        <li className="page-item">
          <a className="page-link">Previous</a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            {this.state.numberOfRecordes}
          </a>
        </li>
        <li className="page-item">
          <a className="page-link">Next</a>
        </li>
        <li className="page-item">
          <a className="page-link">Last</a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
