import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { applyMiddleware, createStore } from "redux";
import rootReducers from "./services/reducers";

import firebaseContext from "./services/context/firebaseContext";
import Firebase from "./services/firebase";

import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = new createStore(rootReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <firebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </firebaseContext.Provider>
  </Provider>,
  document.getElementById("root")
);
