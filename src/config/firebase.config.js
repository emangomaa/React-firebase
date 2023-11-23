import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB9TV7AGyIv8i5GTNW9q2cclk7SGdDMD-Q",
  authDomain: "zetaton-react-task.firebaseapp.com",
  projectId: "zetaton-react-task",
  storageBucket: "zetaton-react-task.appspot.com",
  messagingSenderId: "40437437454",
  appId: "1:40437437454:web:0178b69ec247685d7f585f",
  measurementId: "G-Z8VR35Y1FR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
