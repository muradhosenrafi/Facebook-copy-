
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
 apiKey: "AIzaSyCB2kDBMsBQ8h6z_G3mUBGLjVkSC7ZP4To",
  authDomain: "chatingapp-5ffc3.firebaseapp.com",
  projectId: "chatingapp-5ffc3",
  storageBucket: "chatingapp-5ffc3.firebasestorage.app",
  messagingSenderId: "77670324928",
  appId: "1:77670324928:web:67b25cb01ba2c3016a6b25"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;