import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addUserAction } from "./services/actions/userAction";
import { privateRoutes, publicRoutes } from "./router/routes";

const App = () => {
  const isAuth = true;
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          key={route.index + 1}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect to={"/home"} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          key={route.index + 1}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Redirect to={"/"} />
    </Switch>
  );
};

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
