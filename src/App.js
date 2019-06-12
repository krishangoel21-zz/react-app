import React from "react";
import FetchProduct from "./Component/FetchProduct";
import Header from "./Component/Header";
import AddProduct from "./Component/AddProduct";

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

  onFormSubmit = b => {
    let apiUrl;
    let method;
    if (this.state.isEditProduct) {
      apiUrl = "http://localhost:3004/products/" + b.id;
      method = "PUT";
    } else {
      apiUrl = "http://localhost:3004/products";
      method = "POST";
    }
    const options = {
      method,
      cache: "no-cache",
      mode: "cors",
      body: JSON.stringify(b),
      headers: { "Content-Type": "application/json" }
    };
    fetch(apiUrl, options)
      .then(res => res.json())
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
    const api = "http://localhost:3004/products/" + pId;
    const options = {
      method: "GET"
    };
    fetch(api, options)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            product: result,
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
    );
  }
}

export default App;
