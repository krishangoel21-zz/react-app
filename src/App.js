import React from "react";
import Header from "./Component/Header";
import FetchProduct from "./Component/FetchProduct";
import AddProduct from "./Component/AddProduct";
//import "./Component/Redux/singleReducers";
import "./Component/Redux/middleware";
/* import { Provider } from "react-redux";
import store from "./store"; */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddProduct: false,
      error: null,
      response: {},
      product: {},
      isEditProduct: false
    };
  }

  onFormSubmit = data => {
    let apiUrl;
    if (this.state.isEditProduct) {
      apiUrl = "http://localhost:6060/api/" + data.id;
    } else {
      apiUrl = "http://localhost:6060/api/create";
    }
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(apiUrl, options)
      .then(result => result.json())
      .then(
        result => {
          this.setState({
            response: result,
            isAddProduct: false,
            isEditProduct: false
          });
        },
        error => {
          this.setState({ error });
        }
      );
  };

  onEditProduct = pId => {
    const api = "http://localhost:6060/api/" + pId;
    const options = {
      method: "GET"
    };
    fetch(api, options)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            product: result[0],
            isAddProduct: true,
            isEditProduct: true
          });
        },
        error => {
          this.setState({ error });
        }
      );
  };

  handleClick = () => {
    this.setState({
      isAddProduct: true
    });
  };

  onFormCancel = () => {
    this.setState({
      isAddProduct: false,
      isEditProduct: false
    });
  };

  render() {
    const { isAddProduct, isEditProduct } = this.state;
    let productForm;
    if (isAddProduct || isEditProduct) {
      productForm = (
        <AddProduct
          onFormSubmit={this.onFormSubmit}
          onCancel={this.onFormCancel}
          product={this.state.product}
          isEditProduct={isEditProduct}
        />
      );
    }

    return (
      /*       <Provider store={store}> */
      <div>
        <Header />
        <div className="container">
          {!isAddProduct && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleClick}
            >
              Add Product
            </button>
          )}
          {productForm}
          {!isAddProduct && <FetchProduct onEditProduct={this.onEditProduct} />}
        </div>
      </div>
      /*     </Provider> */
    );
  }
}

export default App;
