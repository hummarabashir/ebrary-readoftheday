import React from "react";
import AddEbookForm from "./AddEbookForm";

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddEbookForm addEbook={this.props.addEbook} />
                <button onClick={this.props.loadSampleEbooks}>Load Sample Ebooks</button>
            </div>
        );
    }
}

export default Inventory;