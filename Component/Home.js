import React from "react";
import MyLoader from "./css";
import Loader from "react-loader-spinner";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isloading: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        result => {
          this.interval = setInterval(() => {
            this.setState({
              isloading: true,
              data: result
            });
          }, 2000);
        },
        error => {
          this.setState({
            isloading: true,
            error
          });
        }
      );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data, isloading, error } = this.state;
    if (error) {
      return <div>having error</div>;
    } else if (!isloading) {
      return (
        <MyLoader>
          <Loader type="Circles" color="#" height={100} width={100} />
        </MyLoader>
      );
    } else {
      return (
        <table border="1px">
          <tbody>
            <tr>
              <th>SR.NO</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>WEBSITE</th>
              <th>CITY</th>
              <th>PHONE</th>
            </tr>
            {data.map(d => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.website}</td>
                <td>{d.address.city}</td>
                <td>{d.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  }
}

export default Home;
