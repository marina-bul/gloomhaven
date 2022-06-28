import React from "react";
import { useHistory } from "react-router-dom";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import s from "./Intro.module.css";

const IntroPage = () => {
  const router = useHistory();
  
  return (
    <HeaderBlock
      title="Добро пожаловать в Мрачную Гавань!"
      descr="Зарегистрируйте отряд и приступайте к своему главному приключению!"
    >
      <button className={s.btn} onClick={() => router.push("/reg")}>
        Начать приключение!
      </button>
      <button className={s.btn} onClick={() => router.push("/login")}>
        Продолжить приключение!
      </button>
    </HeaderBlock>
  );
};

export default IntroPage;
