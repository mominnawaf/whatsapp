import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHsagLZF-ZK8ZsEKgecWwn8VRzBg6JDxc",
  authDomain: "whatsapp-796f9.firebaseapp.com",
  databaseURL: "https://whatsapp-796f9.firebaseio.com",
  projectId: "whatsapp-796f9",
  storageBucket: "whatsapp-796f9.appspot.com",
  messagingSenderId: "339576095161",
  appId: "1:339576095161:web:e47ab6fdfb9339a2af3668",
  measurementId: "G-J7HB8XY9JL"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export{auth,provider}
  export default db;