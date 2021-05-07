import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { scenes } from "./scenes";
import Card from "./components/Card/Card";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Header from "./components/ContentBlock/Header/Header";
import Paragraph from "./components/ContentBlock/Paragraph/Paragraph";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";

function App() {
  return (
    <>
      <HeaderBlock
        title="Добро пожаловать в Мрачную Гавань!"
        descr="Зарегистрируйте отряд и приступайте к своему главному приключению!"
      />
      <ContentBlock>
        <Header>Краткая историческая справка</Header>
        <Paragraph>
          Мрачная Гавань - первый город, основанный людьми тысячу лет назад для
          защиты от монстров
        </Paragraph>
      </ContentBlock>
      <HeaderBlock
        title="Сценарии"
        descr="Более сотни приключений на любой вкус. Вместе мы сделаем Мрачную Гавань процветающим и безопасным местом!"
        hideBackground
      >
        {scenes.map((el) => (
          <Card key={el.id} number={el.number} title={el.title} />
        ))}
      </HeaderBlock>
      <FooterBlock />
    </>
  );
}

export default App;
