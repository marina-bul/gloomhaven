import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import * as actions from "../services/actions";
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
    const { countNumber, plusAction, minusAction } = this.props;
    return (
      <>
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

        <HeaderBlock>
          <h2>{countNumber}</h2>
          <button
            className={s.btn}
            onClick={() => {
              minusAction(1);
            }}
          >
            -
          </button>
          <button
            className={s.btn}
            onClick={() => {
              plusAction(1);
            }}
          >
            +
          </button>
        </HeaderBlock>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countNumber: state.counter.count,
    done: false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);
