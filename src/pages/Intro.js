import React, { Component } from "react";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";

class IntroPage extends Component {
  showLogin = () => {
    debugger;
    this.props.showLoginPage();
  };
  render() {
    return (
      <HeaderBlock
        title="Добро пожаловать в Мрачную Гавань!"
        descr="Зарегистрируйте отряд и приступайте к своему главному приключению!"
        buttonName="Начать приключение!"
        showLoginPage={this.showLogin}
      />
    );
  }
}

export default IntroPage;
