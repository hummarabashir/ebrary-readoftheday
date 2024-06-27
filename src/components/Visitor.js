import React from "react";
import Header from "./Header";
import Ebook from "./Ebook";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleEbooks from "../sample-ebooks";
import base from "../base";
import { withRouter } from 'react-router-dom';

class Visitor extends React.Component {
    state = {
        ebooks: {},
        order: {}
    }

    componentDidMount() {
        const username = localStorage.getItem('username');
        const roleName = localStorage.getItem('rolename');
    
        // if (!username || !roleName || roleName !== 'Visitor') {
        //   // Redirect to login page
        //   this.props.history.push('/');
        // }
        if (roleName === 'Visitor') {
            this.props.history.push('/store/Visitor');
          } else if (roleName === 'Admin') {
            this.props.history.push('/store/Admin');
          } else {
            this.props.history.push('/');
          }


        const { params } = this.props.match;

        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`Admin/ebooks`, {
            context: this,
            state: "ebooks"
        });
    }

    addToOrder = key => {
        const order ={ ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };

    removeFromOrder = key => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order });
    };

    handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("rolename");
        this.props.history.push('/');
    }

    render() {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("rolename");
        return (
            <>
            <div className="topText">
            <p>Hi, {storedUsername}</p>
            <button onClick={this.handleLogout}>Logout</button>
            {/* <p>Role: {storedRole}</p> */}
        </div>
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
                <Order 
                  ebooks={this.state.ebooks}
                  order={this.state.order}
                  removeFromOrder={this.removeFromOrder}
                  />
            </div>
            </>
        )
    }
}

export default withRouter(Visitor);