import * as firebase from "firebase";

// Big security concern!!!
var firebaseConfig = {
    apiKey: "AIzaSyABYRK1SJNEwSVVlmAh80p2hfDeBGcaVEs",
    authDomain: "pcr-home-backend.firebaseapp.com",
    databaseURL: "https://pcr-home-backend.firebaseio.com",
    projectId: "pcr-home-backend",
    storageBucket: "pcr-home-backend.appspot.com",
    messagingSenderId: "855807178171",
    appId: "1:855807178171:web:2c96c6b2674b214521009e",
    measurementId: "G-JQBZR34K0R"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;