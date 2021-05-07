import React from "react";
import { scenes } from "../../store";
import Card from "../Card/Card";
import s from "./CardContainer.module.css";

const CardContainer = (props) => {
  return (
    <div className={s.cardWrapper}>
      {scenes.map((el) => (
        <Card key={el.id} number={el.number} title={el.title} />
      ))}
    </div>
  );
};

export default CardContainer;
