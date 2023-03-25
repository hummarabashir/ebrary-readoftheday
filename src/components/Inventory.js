import React from "react";
import AddEbookForm from "./AddEbookForm";
import EditEbookForm from "./EditEbookForm";

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.ebooks).map(key => (
                    <EditEbookForm 
                      key={key}
                      index={key}
                      ebook={this.props.ebooks[key]}
                    />
                ))}
                <AddEbookForm addEbook={this.props.addEbook} />
                <button onClick={this.props.loadSampleEbooks}>Load Sample Ebooks</button>
            </div>
        );
    }
}

export default Inventory;