import React from "react";
import Header from "./Header";
import Ebook from "./Ebook";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Ebrary" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Ebook />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory />
            </div>
        );
    }
}

export default App;