import React from "react";
import { getFunName } from "../helpers";
import Header from "./Header";

class StorePicker extends  React.Component {
    // myInput = React.createRef();
    // goToStore = event => {
    //     event.preventDefault();
    //     const storeName = this.myInput.current.value;
    //     this.props.history.push(`/store/${storeName}`);
    // }
    state = {
        selectedRole: ''
    };

    componentDidMount() {
        const username = localStorage.getItem('username');
        const roleName = localStorage.getItem('rolename');
        if (roleName === 'Visitor') {
            this.props.history.push('/store/Visitor');
          } else if (roleName === 'Admin') {
            this.props.history.push('/store/Admin');
          } else {
            this.props.history.push('/');
          }
        }

    handleRoleChange = (event) => {
        this.setState({ selectedRole: event.target.value });
    };
    myInputName = React.createRef();

    goToStore = async (event) => {
        event.preventDefault();
        const myName = this.myInputName.current.value;
        const storeName = this.state.selectedRole;
        try {
            localStorage.setItem("username", myName);
            localStorage.setItem("rolename", storeName);
          } catch (error) {
            console.error("Error storing data: ", error);
          }
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
            <div className="store-catch">
            <Header tagline="Ebrary" />
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter below Information!!</h2>
                {/* <input 
                  type="text"
                  ref={this.myInput} 
                  placeholder="Library Name"
                  defaultValue={getFunName()} 
                  required
                /> */}
                  <input 
                  type="text"
                  className="myInputName"
                  ref={this.myInputName} 
                  placeholder="Your Name"
                  required
                />
                  {/* <input 
                  type="text"
                  className="myInputRole"
                  ref={this.myInput} 
                  placeholder="Role (Visitor or Admin)"
                  required
                /> */}
                      <select
                value={this.state.selectedRole}
                onChange={this.handleRoleChange}
                className="myInputRole"
                required
            >
                <option value="" disabled>Visitor or Admin</option>
                <option value="Visitor">Visitor</option>
                <option value="Admin">Admin</option>
            </select>
                <button type="submit">Visit Library →</button>
            </form>
            </div>
        );
    }
}

export default StorePicker;