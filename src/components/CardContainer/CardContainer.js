import React, { Component } from "react";

import firebaseContext from "../../services/context/firebaseContext";
import Card from "../Card/Card";
import s from "./CardContainer.module.css";

class CardContainer extends Component {
  render() {
    const { scenes } = this.props;
    debugger;

    return (
      <div className={s.cardWrapper}>
        {scenes.map((el) => (
          <Card key={el.id} number={el.number} title={el.title} />
        ))}
      </div>
    );
  }
}

CardContainer.contextType = firebaseContext;

export default CardContainer;
