import React, { Component } from "react";
import s from "./HeaderBlock.module.css";

class HeaderBlock extends Component {
  logIn = () => {
    debugger;
    this.props.showLoginPage();
  };
  render() {
    const { title, descr, hideBackground, buttonName } = this.props;
    const styleBackground = hideBackground ? { backgroundImage: "none" } : {};
    return (
      <div className={s.intro} style={styleBackground}>
        <div className={s.wrapper}>
          <h1>{title}</h1>
          <p>{descr}</p>
          {buttonName && (
            <button className={s.btn} onClick={this.logIn}>
              {buttonName}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default HeaderBlock;
