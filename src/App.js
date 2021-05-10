import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";
import { store } from "./store";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Header from "./components/ContentBlock/Header/Header";
import Paragraph from "./components/ContentBlock/Paragraph/Paragraph";
import FooterBlock from "./components/FooterBlock/FooterBlock";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import CardContainer from "./components/CardContainer/CardContainer";
import TeamContainer from "./components/TeamContainer/TeamContainer";

// const getScenes = async () => {
//   let headers = new Headers();

//   headers.append("Content-Type", "application/json");
//   headers.append("Accept", "application/json");

//   headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
//   headers.append("Access-Control-Allow-Credentials", "true");

//   headers.append("GET", "POST", "OPTIONS");

//   headers.append("Authorization");

//   const res = await fetch("https://localhost:5001/api/scenes", {
//     headers: headers,
//   });
//   const body = await res.json();

//   return body;
// };

// getScenes().then((res) => console.log("res = ", res));

const firebaseConfig = {
  apiKey: "AIzaSyCN7vrrPqUmmdH11tCNwYQfQBkml4S576k",
  authDomain: "gloomhaven-fd59f.firebaseapp.com",
  databaseURL: "https://gloomhaven-fd59f-default-rtdb.firebaseio.com",
  projectId: "gloomhaven-fd59f",
  storageBucket: "gloomhaven-fd59f.appspot.com",
  messagingSenderId: "293118229181",
  appId: "1:293118229181:web:a518058b2573ade37dd5d4",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

class App extends Component {
  state = {
    scenes: [],
    team: store.team,
  };

  componentDidMount() {
    database
      .ref()
      .once("value")
      .then((res) => {
        this.setState(
          {
            scenes: res.val(),
          }
          // this.setNewScene
        );
      });
  }

  // setNewScene = () => {
  //   const { scenes } = this.state;
  //   database.ref().update([
  //     ...scenes,
  //     {
  //       id: 5,
  //       number: 5,
  //       title: "Храм стихий",
  //     },
  //   ]);
  // };

  deleteItemFunc = (id) => {
    this.setState((state) => {
      const stateArr = state.team.users;
      const index = stateArr.findIndex((item) => item.id === id);
      const newStateArr = [
        ...stateArr.slice(0, index),
        ...stateArr.slice(index + 1),
      ];
      const newStoreTeam = {
        ...state.team,
        users: newStateArr,
      };
      return {
        team: newStoreTeam,
      };
    });
  };

  pushItemFunc = (item) => {
    this.setState((state) => {
      const { team, name, nation } = item;
      const stateArr = state.team.users;
      const createNewId = () => {
        let newUserId =
          stateArr.length !== 0 ? stateArr[stateArr.length - 1].id + 1 : 1;
        return newUserId;
      };
      const newUser = {
        id: createNewId(),
        name: name,
        nation: nation,
      };

      const newStoreTeam = {
        ...state.team,
        name: team,
        users: [...stateArr, newUser],
      };
      return {
        store: newStoreTeam,
      };
    });
  };

  render() {
    const { team, scenes } = this.state;
    return (
      <>
        <HeaderBlock
          title="Добро пожаловать в Мрачную Гавань!"
          descr="Зарегистрируйте отряд и приступайте к своему главному приключению!"
          buttonName="Начать приключение!"
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

export default App;
