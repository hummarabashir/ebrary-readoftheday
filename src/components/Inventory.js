import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddEbookForm from "./AddEbookForm";
import EditEbookForm from "./EditEbookForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    ebooks: PropTypes.object,
    updateEbook: PropTypes.func,
    deleteEbook: PropTypes.func,
    loadSampleEbooks: PropTypes.func,
    addEbook: PropTypes.func,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    // 1 .Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    // 2. Claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    // 3. Set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };
  logout = async () => {
    console.log("Logging Out!");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };
  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    }
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.ebooks).map((key) => (
          <EditEbookForm
            key={key}
            index={key}
            ebook={this.props.ebooks[key]}
            updateEbook={this.props.updateEbook}
            deleteEbook={this.props.deleteEbook}
          />
        ))}
        <AddEbookForm addEbook={this.props.addEbook} />
        <button onClick={this.props.loadSampleEbooks}>
          Load Sample Ebooks
        </button>
      </div>
    );
  }
}

export default Inventory;
