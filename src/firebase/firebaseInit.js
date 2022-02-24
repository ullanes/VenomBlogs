import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBEbbg5a3nGB13qhjqx0N7Mpuwvt-xxZw",
    authDomain: "fireblogsyt-ca72c.firebaseapp.com",
    projectId: "fireblogsyt-ca72c",
    storageBucket: "fireblogsyt-ca72c.appspot.com",
    messagingSenderId: "76218832129",
    appId: "1:76218832129:web:b81ccec2d48a76e81a3700"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp  = firebase.firestore.FieldValue.serverTimestamp;

export{timestamp};
export default firebaseApp.firestore();