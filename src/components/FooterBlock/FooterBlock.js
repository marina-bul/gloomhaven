import React from "react";
import s from "./FooterBlock.module.css";

const FooterBlock = () => {
  return (
    <div className={s.footer}>
      <p>Спасибо за визит!</p>
      <div className={s.copyrightWrapper}>
        <span>Designed by Marina Bulanova</span>
        <span>2021</span>
      </div>
    </div>
  );
};

export default FooterBlock;
