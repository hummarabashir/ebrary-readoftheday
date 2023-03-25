import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyB0aSglTq1iWOWPkNEcka8qPN7M1LcR3kU",
      authDomain: "ebrary-readoftheday-123.firebaseapp.com",
      databaseURL: "https://ebrary-readoftheday-123-default-rtdb.firebaseio.com"
      }
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;