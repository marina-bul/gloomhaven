import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import firebaseContext from "./services/context/firebaseContext";
import Firebase from "./services/firebase";

ReactDOM.render(
  <firebaseContext.Provider value={new Firebase()}>
    <App />
  </firebaseContext.Provider>,
  document.getElementById("root")
);
