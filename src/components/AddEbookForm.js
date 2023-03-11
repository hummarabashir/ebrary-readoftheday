import React from "react";

class AddEbookForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    render() {
        return (
            <form className="fish-edit" onSubmit={this}>
                <input 
                  type="text"
                  name="name"
                  ref={this.nameRef}
                  plaecholder="Name" />
            </form>
        );
    }
}

export default AddEbookForm;