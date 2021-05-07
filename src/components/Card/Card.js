import React from "react";
import cl from "classnames";
import { DownCircleOutlined } from "@ant-design/icons";
import s from "./Card.module.css";

class Card extends React.Component {
  state = {
    showName: false,
    complited: false,
  };

  handleOnClick = () => {
    this.setState((state) => {
      return { showName: !state.showName };
    });
  };

  completeScene = () => {
    this.setState((state) => {
      return {
        complited: !state.complited,
      };
    });
  };

  render() {
    const { number, title } = this.props;
    const { showName, complited } = this.state;

    return (
      <div
        className={cl(
          s.card,
          { [s.sceneName]: showName },
          { [s.complited]: complited }
        )}
        onClick={this.handleOnClick}
      >
        <div className={s.cardInner}>
          <div className={s.cardFront}>{number}</div>
          <div className={s.cardBack}>
            <span>{title}</span>
            <span className={cl(s.unvisible, { [s.victory]: complited })}>
              Победа!
            </span>
            <DownCircleOutlined
              className={s.icon}
              onClick={this.completeScene}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
