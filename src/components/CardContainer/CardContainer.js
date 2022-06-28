import React, { Component } from "react";

import Card from "./Card/Card";
import s from "./CardContainer.module.css";

class CardContainer extends Component {
  render() {
    const { scenes } = this.props;

    return (
      <div className={s.cardWrapper}>
        {scenes.map((el) => (
          <Card key={el.id} number={el.number} title={el.title} />
        ))}
      </div>
    );
  }
}

export default CardContainer;
