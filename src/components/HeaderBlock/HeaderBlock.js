import React from "react";
import s from "./HeaderBlock.module.css";

const HeaderBlock = ({ title, descr, hideBackground = false, children }) => {
  const styleBackground = hideBackground ? { backgroundImage: "none" } : {};
  return (
    <div className={s.intro} style={styleBackground}>
      <div className={s.wrapper}>
        <h1>{title}</h1>
        <p>{descr}</p>
        {children}
      </div>
    </div>
  );
};

export default HeaderBlock;
