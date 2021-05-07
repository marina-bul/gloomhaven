import React from "react";
import s from "./FooterBlock.module.css";

const FooterBlock = (props) => {
  return (
    <div className={s.footer}>
      <p>Спасибо за визит!</p>
      <div className={s.copyrightWrapper}>
        <span>Designed by отряд Сверкающие пятки</span>
        <span>2021</span>
      </div>
    </div>
  );
};

export default FooterBlock;
