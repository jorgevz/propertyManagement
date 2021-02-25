import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBsASSEfDMXorFUQzt7usdccwcLueRURvI",
  authDomain: "propmgmt-99c42.firebaseapp.com",
  projectId: "propmgmt-99c42",
  storageBucket: "propmgmt-99c42.appspot.com",
  messagingSenderId: "189307734348",
  appId: "1:189307734348:web:d0101fa435846f058327e9"
};

 const Fire = firebase.initializeApp(firebaseConfig);


 export default Fire; 