import React from "react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    if (props.product) {
      this.state = props.product;
    } else {
      this.state = this.initialState;
    }
    this.initialState = {
      id: "",
      product_name: "",
      department: "",
      price: "",
      color: "",
      product_material: ""
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value //this is a computed property
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { onCancel, isEditProduct } = this.props;
    return (
      <div>
        <h3>{isEditProduct ? "Edit" : "Add"} Product</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="exampleInputproduct">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                name="product_name"
                value={this.state.product_name || ""}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputCategory">Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Category"
                name="department"
                value={this.state.department || ""}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPrice">Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Price"
                name="price"
                value={this.state.price || ""}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputColor">Color</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Color"
                name="color"
                value={this.state.color || ""}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputMaterial">Material</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Material"
                name="product_material"
                value={this.state.product_material || ""}
                onChange={this.handleChange}
              />
            </div>
            <input type="hidden" name="id" value={this.state.id || ""} />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button onClick={onCancel} type="button" className="btn btn-danger">
              Cancel
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddProduct;
