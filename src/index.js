import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGb-J_4XaX6QkiMlfSmposuDl6vwWG-z4",
  authDomain: "testuploadimage-398503.firebaseapp.com",
  projectId: "testuploadimage-398503",
  storageBucket: "testuploadimage-398503.appspot.com",
  messagingSenderId: "890262017568",
  appId: "1:890262017568:web:01f767c4224b28371b4e45",
  measurementId: "G-J8H4542CBH"
};

firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
