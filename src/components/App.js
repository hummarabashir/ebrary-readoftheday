import React from "react";
import Header from "./Header";
import Ebook from "./Ebook";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleEbooks from "../sample-ebooks";
import base from "../base";

class App extends React.Component {
  state = {
    ebooks: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/ebooks`, {
      context: this,
      state: "ebooks",
    });
  }

  addEbook = (ebook) => {
    const ebooks = { ...this.state.ebooks };
    ebooks[`ebook${Date.now()}`] = ebook;
    this.setState({ ebooks });
  };

  updateEbook = (key, updateEbook) => {
    const ebooks = { ...this.state.ebooks };
    ebooks[key] = updateEbook;
    this.setState({ ebooks });
  };

  deleteEbook = (key) => {
    const ebooks = { ...this.state.ebooks };
    ebooks[key] = null;
    this.setState({ ebooks });
  };

  loadSampleEbooks = () => {
    this.setState({ ebooks: sampleEbooks });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Ebrary" />
          <ul className="fishes">
            {Object.keys(this.state.ebooks).map((key) => (
              <Ebook
                key={key}
                index={key}
                details={this.state.ebooks[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          ebooks={this.state.ebooks}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          ebooks={this.state.ebooks}
          addEbook={this.addEbook}
          updateEbook={this.updateEbook}
          deleteEbook={this.deleteEbook}
          loadSampleEbooks={this.loadSampleEbooks}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
