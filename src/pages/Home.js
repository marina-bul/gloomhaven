import React, { Component } from "react";

import ContentBlock from "../components/ContentBlock/ContentBlock";
import Header from "../components/ContentBlock/Header/Header";
import Paragraph from "../components/ContentBlock/Paragraph/Paragraph";
import FooterBlock from "../components/FooterBlock/FooterBlock";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import CardContainer from "../components/CardContainer/CardContainer";
import TeamContainer from "../components/TeamContainer/TeamContainer";
import database from "../services/firebase";

class HomePage extends Component {
  state = {
    scenes: [],
    team: {
      name: "",
      users: [],
    },
  };

  urlBase = `/team/${this.props.user.uid}`;

  componentDidMount() {
    database
      .ref("/scenes")
      .once("value")
      .then((res) => {
        this.setState(
          {
            scenes: res.val(),
          }
          // this.setNewScene
        );
      });
    database.ref(this.urlBase).on("value", (res) => {
      this.setState({
        team: res.val() || { name: "", users: [] },
      });
    });
  }

  deleteItemFunc = (id) => {
    const stateArr = this.state.team.users;
    const newStateArr = stateArr.filter((item) => item.id !== id);
    debugger;
    database.ref(this.urlBase).set({ users: newStateArr });
  };

  pushItemFunc = (item) => {
    const { team, name, nation } = item;
    const stateArr = this.state.team.users;

    const newUser = {
      id: +new Date(),
      name: name,
      nation: nation,
    };
    database.ref(this.urlBase).set({
      name: team,
      users: [...stateArr, newUser],
    });
  };

  render() {
    const { team, scenes } = this.state;
    console.log(this.props.user.uid);
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
          <TeamContainer
            team={team}
            deleteItem={this.deleteItemFunc}
            handlePush={this.pushItemFunc}
          />
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
          <CardContainer scenes={scenes} />
        </ContentBlock>
        <FooterBlock />
      </>
    );
  }
}

export default HomePage;
