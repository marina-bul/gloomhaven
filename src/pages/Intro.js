import React, { Component } from "react";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import s from "./Intro.module.css";

class IntroPage extends Component {
  showRegPage = () => {
    const { history } = this.props;
    history.push("/reg");
  };

  showLogPage = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <HeaderBlock
        title="Добро пожаловать в Мрачную Гавань!"
        descr="Зарегистрируйте отряд и приступайте к своему главному приключению!"
      >
        <button className={s.btn} onClick={this.showRegPage}>
          Начать приключение!
        </button>
        <button className={s.btn} onClick={this.showLogPage}>
          Продолжить приключение!
        </button>
      </HeaderBlock>
    );
  }
}

export default IntroPage;
