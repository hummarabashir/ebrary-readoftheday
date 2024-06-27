import React from "react";

class AddEbookForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createEbook = event => {
        event.preventDefault();
        const ebook = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        this.props.addEbook(ebook);
        event.currentTarget.reset();
    }
    
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createEbook}>
                <input 
                  type="text"
                  name="name"
                  ref={this.nameRef}
                  placeholder="Name" required/>
                  <input 
                  type="text"
                  name="price"
                  ref={this.priceRef}
                  placeholder="Price" required/>
                  <select 
                  type="text"
                  name="status"
                  ref={this.statusRef}>
                    <option value="available">In Stock!</option>
                    <option value="unavailable">Sold Out!</option>
                  </select>
                  <textarea 
                  name="desc"
                  ref={this.descRef}
                  placeholder="Desc" required/>
                  <input 
                  type="text"
                  name="image"
                  ref={this.imageRef}
                  placeholder="Image" required/>
                  <button type="submit">+ Add Ebook</button>
            </form>
        );
    }
}

export default AddEbookForm;