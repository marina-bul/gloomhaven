import React from "react";

import s from "./Character.module.css";

const Character = (props) => {
  return (
    <div className={s.user}>
      <h4>Имя персонажа</h4>
      <span>Раса персонажа</span>
    </div>
  );
};

export default Character;
