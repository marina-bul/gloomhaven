import React, { Component } from "react";
import "./App.css";
import { Spin } from "antd";

import HomePage from "./pages/Home";
import { fire } from "./services/firebase";
import LoginPage from "./pages/Login";
import RegistrPage from "./pages/Reg";
import firebaseContext from "./services/context/firebaseContext";

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const { auth, setUserUid } = this.context;
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUserUid(user.uid);
        this.setState({ user });
      } else {
        setUserUid(null);
        this.setState({ user: false });
      }
    });
  }

  showRegPage = () => {
    this.setState({ user: undefined });
  };

  render() {
    const { user } = this.state;

    if (user === null) {
      return (
        <div className="loaderWrapper">
          <Spin size="large" />
        </div>
      );
    }

    if (user === undefined) {
      return <RegistrPage />;
    }

    return (
      <>
        {user ? (
          <HomePage user={this.state.user} />
        ) : (
          <LoginPage showRegPage={this.showRegPage} />
        )}
      </>
    );
  }
}

App.contextType = firebaseContext;

export default App;
