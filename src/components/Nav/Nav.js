import React, { Component } from "react";
import s from "./Nav.module.css";

class Nav extends Component {
  render() {
    const { children } = this.props;
    return <ul className={s.nav}>{children}</ul>;
  }
}

export default Nav;
