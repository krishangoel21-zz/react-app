import React from "react";
import Pagination from "./Pagination";
class FetchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      bulkDelete: [],
      isLoading: false,
      error: null,
      isDeleteAll: false,
      checked: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:6060/api")
      .then(res => res.json())
      .then(
        result => {
          /*           this.interval = setInterval(() => { */
          this.setState({
            isLoading: true,
            products: result
          });
          /*    }, 1000); */
        },
        error => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
  }

  /*   componentWillUnmount() {
    clearInterval(this.interval);
  } */

  handleDelete = pId => {
    const { products } = this.state;
    const apiUrl = "http://localhost:6060/api/" + pId;
    const options = {
      method: "DELETE"
    };
    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            response: result,
            products: products.filter(product => product.id !== pId)
          });
        },
        error => {
          this.setState({ error });
        }
      );
  };

  selectedDelete = () => {
    const { bulkDelete, products } = this.state;
    const apiUrl = "http://localhost:6060/api/delete/" + bulkDelete;
    const options = {
      method: "DELETE"
    };
    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            response: result,
            products: products.filter(
              product => !bulkDelete.includes(product.id)
            )
          });
        },
        error => {
          this.setState({ error });
        }
      );
  };

  filehandleAllChecked = () => {};

  handleChecked = e => {
    const { bulkDelete } = this.state;
    const toDel = parseInt(e.target.value);
    const ele = document.getElementById("myCheckBox_" + toDel);

    if (!bulkDelete.includes(toDel) && ele.checked) {
      bulkDelete.push(toDel);
      this.setState({
        checked: !ele.checked,
        isDeleteAll: bulkDelete.length > 0
      });
    } else if (bulkDelete.includes(toDel) && !ele.checked) {
      const arrDelete = bulkDelete.filter(v => v != toDel);
      this.setState({
        checked: ele.checked,
        isDeleteAll: bulkDelete.length > 1,
        bulkDelete: arrDelete
      });
    }
  };

  render() {
    const { products, isLoading, error, isDeleteAll } = this.state;
    if (error) {
      return <div>Having error</div>;
    } else if (!isLoading) {
      return (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          />
        </div>
      );
    } else {
      return (
        <div>
          {isDeleteAll && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.selectedDelete}
            >
              Delete All Records
            </button>
          )}
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    name="idAll"
                    onChange={this.filehandleAllChecked}
                  />
                </th>
                <th scope="col">SKU</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Color</th>
                <th scope="col">Material</th>
                <th scope="col">Opreations</th>
              </tr>
            </thead>
            <tbody>
              {products.map(r => (
                <tr key={r.id}>
                  <td>
                    <input
                      id={"myCheckBox_" + r.id}
                      type="checkbox"
                      value={r.id}
                      name="id"
                      onChange={this.handleChecked}
                    />
                  </td>
                  <td>{r.id}</td>
                  <td>{r.productName}</td>
                  <td>{r.department}</td>
                  <td>{r.price}</td>
                  <td>{r.color}</td>
                  <td>{r.productMaterial}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.props.onEditProduct(r.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(r.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      );
    }
  }
}

export default FetchProduct;
