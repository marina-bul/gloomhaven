import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Header from "./components/ContentBlock/Header/Header";
import Paragraph from "./components/ContentBlock/Paragraph/Paragraph";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import CardContainer from "./components/CardContainer/CardContainer";
import TeamContainer from "./components/TeamContainer/TeamContainer";

function App() {
  return (
    <>
      <HeaderBlock
        title="Добро пожаловать в Мрачную Гавань!"
        descr="Зарегистрируйте отряд и приступайте к своему главному приключению!"
      />
      <ContentBlock>
        <Header>Создать отряд</Header>
        <Paragraph>
          В полях слева напишите название отряда, а также имя и расу каждого
          члена отряда. Справа Вы можете увидеть текущий состав отряда.
        </Paragraph>
        <TeamContainer />
      </ContentBlock>
      <HeaderBlock
        title="Краткая историческая справка"
        descr="Мрачная Гавань - первый город, основанный людьми тысячу лет назад для
        защиты от монстров"
        hideBackground
      />
      <ContentBlock>
        <Header>Сценарии</Header>
        <Paragraph>
          Более сотни приключений на любой вкус. Вместе мы сделаем Мрачную
          Гавань процветающим и безопасным местом!
        </Paragraph>
        <CardContainer />
      </ContentBlock>
      <FooterBlock />
    </>
  );
}

export default App;
