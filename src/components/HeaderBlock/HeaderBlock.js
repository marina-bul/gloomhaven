import React, { Component } from "react";
import s from "./HeaderBlock.module.css";

class HeaderBlock extends Component {
  render() {
    const { title, descr, hideBackground, children } = this.props;
    const styleBackground = hideBackground ? { backgroundImage: "none" } : {};
    return (
      <div className={s.intro} style={styleBackground}>
        <div className={s.wrapper}>
          <h1>{title}</h1>
          <p>{descr}</p>
          {children}
        </div>
      </div>
    );
  }
}

export default HeaderBlock;
