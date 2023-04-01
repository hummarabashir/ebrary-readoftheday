import React from "react";

class EditEbookForm extends React.Component {
  handleChange = (event) => {
    const updatedEbook = {
      ...this.props.ebook,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateEbook(this.props.index, updatedEbook);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={this.props.ebook.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={this.props.ebook.price}
          onChange={this.handleChange}
        />
        <select
          type="text"
          name="status"
          value={this.props.ebook.status}
          onChange={this.handleChange}
        >
          <option value="available">In Stock!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.ebook.desc}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          value={this.props.ebook.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteEbook(this.props.index)}>
          Remove Ebook
        </button>
      </div>
    );
  }
}

export default EditEbookForm;
