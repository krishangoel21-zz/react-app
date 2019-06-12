import React from "react";

class FetchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/products")
      .then(res => res.json())
      .then(
        result => {
          this.interval = setInterval(() => {
            this.setState({
              isLoading: true,
              products: result
            });
          }, 1000);
        },
        error => {
          this.setState({
            isLoading: true,
            error
          });
        }
      );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleDelete = pId => {
    const { products } = this.state;
    const apiUrl = "http://localhost:3004/products/" + pId;
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

  render() {
    const { products, isLoading, error } = this.state;
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
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" name="idAll" />
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
                    <input type="checkbox" value={r.id} name="id" />
                  </td>
                  <td>{r.id}</td>
                  <td>{r.product_name}</td>
                  <td>{r.department}</td>
                  <td>{r.price}</td>
                  <td>{r.color}</td>
                  <td>{r.product_material}</td>
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
        </div>
      );
    }
  }
}

export default FetchProduct;
