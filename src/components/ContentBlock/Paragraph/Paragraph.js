import React from "react";
import s from "./Paragraph.module.css";

const Paragraph = ({ children }) => {
  return <p className={s.descr}>{children}</p>;
};

export default Paragraph;
