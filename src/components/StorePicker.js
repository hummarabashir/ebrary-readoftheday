import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends  React.Component {
    myInput = React.createRef();
    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Library</h2>
                <input 
                  type="text"
                  ref={this.myInput} 
                  placeholder="Library Name"
                  defaultValue={getFunName()} 
                  required
                />
                <button type="submit">Visit Library →</button>
            </form>
        );
    }
}

export default StorePicker;