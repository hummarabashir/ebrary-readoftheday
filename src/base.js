import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: "https://ebrary-readoftheday-123-default-rtdb.firebaseio.com"
      }
);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;