import React, { Component } from "react";
import s from "./NavItem.module.css";

class NavItem extends Component {
  render() {
    const { children } = this.props;
    return <li className={s.navItem}>{children}</li>;
  }
}

export default NavItem;
