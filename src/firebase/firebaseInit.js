import firebase from 'firebase/app'
import "firebase/firestore"                       

const firebaseConfig = {
    apiKey: "AIzaSyCmBG1g98jqKBRgz0YczjPWZzNSAJyN9Rk",
    authDomain: "fireblogs-f6221.firebaseapp.com",
    projectId: "fireblogs-f6221",
    storageBucket: "fireblogs-f6221.appspot.com",
    messagingSenderId: "638592712705",
    appId: "1:638592712705:web:978efb2b84f505b7fa8000"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const timestamp = firebase.firestore.FieldValue.serverTimesTamp();

  export { timestamp}
export default firebaseApp.firestore()