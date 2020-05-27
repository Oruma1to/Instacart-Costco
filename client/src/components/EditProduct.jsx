import React, { Component } from "react";
import "./EditProduct.css";
import { Redirect } from "react-router-dom";
import StoreFrontNavBar from "./StoreFront/StoreFrontNavBar";
import { departments, checker } from "./selectedOptions";
import Select from "react-select";
import { getProduct, updateProduct } from "../services/product";

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        brand: "",
        department: "",
        category: "",
        imageURL: "",
        price: 0,
        size: "",
        quantity: 0,
      },
      updated: false,
      isEditing: false,
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const product = await getProduct(id);
    this.setState({ product });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      product: {
        ...this.state.product,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = this.props.match.params;
    const updated = await updateProduct(id, this.state.product);
    this.setState({ updated });
  };

  handleSelected = (selectedOption) => {
    this.setState({
      product: {
        ...this.state.product,
        [selectedOption.name]: selectedOption.value,
      },
    });
  };
  render() {
    const { product, updated } = this.state;

    if (updated) {
      return <Redirect to={`/costco/${this.props.match.params.id}`} />;
    }

    return (
      <div className="editProduct-outerDiv">
        <div className="editProduct-Header">
          <StoreFrontNavBar user={this.props.user} />
        </div>

        <div className="editProduct-container">
          <div className="details-of-editProduct">
            <div className="editProduct-image-container">
              <img
                className="editProduct-image"
                src={product.imageURL}
                alt={product.name}
              />
              <form onSubmit={this.handleSubmit}>
                <input
                  className="edit-input-image-link"
                  placeholder="Image Link"
                  value={product.imageURL}
                  name="imageURL"
                  required
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <form
              className="editProduct-items-details"
              onSubmit={this.handleSubmit}
            >
              <div className="editProduct-field-wrapper">
                <div className="editProduct-label">Name:</div>
                <input
                  className="editProduct"
                  placeholder="Name"
                  value={product.name}
                  name="name"
                  required
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>
              <div className="editProduct-field-wrapper">
                <div className="editProduct-label">Brand:</div>
                <input
                  className="editProduct"
                  placeholder="Brand"
                  value={product.brand}
                  name="brand"
                  required
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>
              <div className="editProduct-field-wrapper">
                <div className="editProduct-label">Price:</div>
                <input
                  className="editProduct"
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  value={`${product.price}`}
                  name="price"
                  required
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>
              <div className="editProduct-field-wrapper">
                <div className="editProduct-label">Quantity:</div>
                <input
                  className="editProduct"
                  type="number"
                  placeholder="Quantity"
                  value={product.quantity}
                  name="quantity"
                  required
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>
              <div className="editProduct-field-wrapper">
                <div className="editProduct-label">Size:</div>
                <input
                  className="editProduct"
                  placeholder="Size"
                  value={product.size}
                  name="size"
                  required
                  autoFocus
                  onChange={this.handleChange}
                />
              </div>
              <div className="editProduct-field-wrapper">
                <div className="editProduct-label">Department:</div>
                {/* <div className="editProduct">{product.department}</div> */}
                <Select
                  className="editProduct"
                  placeholder={product.department}
                  value={product.department}
                  options={departments}
                  onChange={this.handleSelected}
                />
              </div>
              <div className="editProduct-field-wrapper">
                <div className="editProduct-label">Category: </div>
                {product.department ? (
                  <Select
                    className="editProduct"
                    placeholder={product.category}
                    options={checker(product.department)}
                    onChange={this.handleSelected}
                  />
                ) : (
                    ""
                  )}
              </div>

              <div className="editProduct-button">
                <button type="submit" className="editProduct-save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PostEdit;
