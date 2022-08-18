import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCjERhPVX-oo70JCt3XHRX7Ahi23JGItJQ",
    authDomain: "payroll-manager-6acc8.firebaseapp.com",
    projectId: "payroll-manager-6acc8",
    storageBucket: "payroll-manager-6acc8.appspot.com",
    messagingSenderId: "1077845053439",
    appId: "1:1077845053439:web:f1600bcbeae089d96521ca"
  };
  
  firebase.initializeApp(firebaseConfig)

  
  //utils
  const auth = firebase.auth()
  const storage = firebase.storage()
  const db = firebase.firestore()

  //Exports
  export { auth, storage, db };