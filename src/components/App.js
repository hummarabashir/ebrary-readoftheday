import React from "react";
import Header from "./Header";
import Ebook from "./Ebook";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleEbooks from "../sample-ebooks";

class App extends React.Component {
    state = {
        ebooks: {},
        order: {}
    }

    addEbook = ebook => {
        const ebooks = { ...this.state.ebooks };
        ebooks[`ebook${Date.now()}`] = ebook;
        this.setState({ ebooks });
    };

    loadSampleEbooks = () => {
        this.setState({ ebooks: sampleEbooks });
    };

    addToOrder = key => {
        const order ={ ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Ebrary" />
                    <ul className="fishes">
                        {Object.keys(this.state.ebooks).map(key => (
                            <Ebook 
                              key={key}
                              index={key}
                              details={this.state.ebooks[key]}
                              addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory 
                  addEbook={this.addEbook}
                  loadSampleEbooks={this.loadSampleEbooks}
                />
            </div>
        );
    }
}

export default App;