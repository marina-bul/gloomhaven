import React from "react";
import s from "./Header.module.css";

const Header = ({ children }) => {
  return <h2 className={s.header}>{children}</h2>;
};

export default Header;
