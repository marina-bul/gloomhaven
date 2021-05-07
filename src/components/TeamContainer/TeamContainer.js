import React from "react";
import Character from "../Character/Character";

import s from "./TeamContainer.module.css";

const TeamContainer = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.data}>
        <form>
          <label>Введите название отряда:</label>
          <input type="text" />
          <label>Введите имя персонажа:</label>
          <input type="text" />
          <label>Введите расу персонажа:</label>
          <input type="text" />
          <button className={s.btn}>OK</button>
        </form>
      </div>
      <div className={s.team}>
        <h3>Название отряда</h3>
        <Character />
      </div>
    </div>
  );
};

export default TeamContainer;
