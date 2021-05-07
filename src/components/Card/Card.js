import React from "react";
import s from "./Card.module.css";

class Card extends React.Component {
  render() {
    const { number, title } = this.props;
    return (
      <div className={s.card}>
        <div className={s.cardInner}>
          <div className={s.cardFront}>{number}</div>
          <div className={s.cardBack}>{title}</div>
        </div>
      </div>
    );
  }
}

export default Card;
