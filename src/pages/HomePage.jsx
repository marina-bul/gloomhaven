import React from "react";

import ContentBlock from "../components/ContentBlock/ContentBlock";
import Header from "../components/ContentBlock/Header/Header";
import Paragraph from "../components/ContentBlock/Paragraph/Paragraph";
import FooterBlock from "../components/FooterBlock/FooterBlock";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";
import CardContainer from "../components/CardContainer/CardContainer";
import TeamContainer from "../components/TeamContainer/TeamContainer";
import { connect } from "react-redux";
import { fetchCardList } from "../services/actions/cardListAction";
import { bindActionCreators } from "redux";
import { fetchteamUsers } from "../services/actions/teamAction";

const HomePage = () => {
  // componentDidMount() {
  //   const { getTeamUsers, getScenes } = this.context;
  //   const { fetchCardList, fetchTeamUsers } = this.props;
  //   fetchTeamUsers(getTeamUsers);
  //   fetchCardList(getScenes);
  // }

    // const { users, scenes } = this.props;
    return (
      <>
        <HeaderBlock
          title="Добро пожаловать в Мрачную Гавань!"
          descr="Жители Мрачной Гавани ждут от вас новых свершений! Да пребудет с вами сила!"
        />
        <ContentBlock>
          <Header>Страница отряда</Header>
          <Paragraph>
            В полях слева напишите название отряда, а также имя и расу каждого
            члена отряда. Справа Вы можете увидеть текущий состав отряда.
          </Paragraph>
          {/* <TeamContainer
            users={users}
            deleteItem={this.deleteItemFunc}
            handlePush={this.pushItemFunc}
          /> */}
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
          {/* <CardContainer scenes={scenes} /> */}
        </ContentBlock>
        <FooterBlock />
      </>
    );
  }


const mapStateToProps = (state) => {
  return {
    users: state.teamUsers.payload || [],
    scenes: state.cardList.payload || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCardList: fetchCardList,
      fetchTeamUsers: fetchteamUsers,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
