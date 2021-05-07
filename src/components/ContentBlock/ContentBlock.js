import React from "react";
import s from "./ContentBlock.module.css";

const ContentBlock = ({ children }) => {
  return (
    <div className={s.content}>
      <div className={s.wrapper}>{children}</div>
    </div>
  );
};

export default ContentBlock;
