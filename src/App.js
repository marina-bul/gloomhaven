import React, { Component } from "react";
import "./App.css";
import { Spin } from "antd";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegistrPage from "./pages/Reg";
import firebaseContext from "./services/context/firebaseContext";
import IntroPage from "./pages/Intro";
import LibraryPage from "./pages/Library";
import ShopPage from "./pages/City";
import Nav from "./components/Nav/Nav";
import NavItem from "./components/Nav/NavItem";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUserAction } from "./services/actions/userAction";

class App extends Component {
  componentDidMount() {
    const { auth, setUserUid } = this.context;
    const { addUser } = this.props;
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
        localStorage.setItem("user", JSON.stringify(user.uid));
        addUser(user);
      } else {
        setUserUid(null);
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    const { userUid, user } = this.props;

    if (user === null) {
      return (
        <div className="loaderWrapper">
          <Spin size="large" />
        </div>
      );
    }

    return (
      <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/reg" component={RegistrPage} />
        <Route
          render={() => {
            return (
              <>
                <Nav>
                  <NavItem>
                    <Link to="/home">Главная</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/library">Архив</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/shop">Магазин</Link>
                  </NavItem>
                </Nav>
                <Switch>
                  <PrivateRoute path="/home" component={HomePage} />
                  <PrivateRoute path="/library" component={LibraryPage} />
                  <PrivateRoute path="/shop" component={ShopPage} />
                  <Redirect to="/" />
                </Switch>
              </>
            );
          }}
        />
      </Switch>
    );
  }
}

App.contextType = firebaseContext;

const mapStateToProps = (state) => {
  return {
    userUid: state.user.userUid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addUser: addUserAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
