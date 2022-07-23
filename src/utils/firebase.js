import { initializeApp } from "firebase/app"
import* as authorization from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCjERhPVX-oo70JCt3XHRX7Ahi23JGItJQ",
    authDomain: "payroll-manager-6acc8.firebaseapp.com",
    projectId: "payroll-manager-6acc8",
    storageBucket: "payroll-manager-6acc8.appspot.com",
    messagingSenderId: "1077845053439",
    appId: "1:1077845053439:web:f1600bcbeae089d96521ca"
  };
  
  
  const app = initializeApp(firebaseConfig);

  //utils
  const auth = authorization.initializeAuth(app);

  //Exports
  export { auth };