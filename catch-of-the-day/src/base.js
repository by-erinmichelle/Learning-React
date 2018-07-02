// for firebase
import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGa4bx_8mxNI14aHaY4EmYmSu--7CrPss",
  authDomain: "catch-of-the-day-erin-wiegman.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-erin-wiegman.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;