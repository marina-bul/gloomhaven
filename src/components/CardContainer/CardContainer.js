import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCardList } from "../../services/actions/cardListAction";
import firebaseContext from "../../services/context/firebaseContext";
import Card from "../Card/Card";
import s from "./CardContainer.module.css";
import { Spin } from "antd";

class CardContainer extends Component {
  componentDidMount() {
    const { getScenes } = this.context;
    const { fetchCardList } = this.props;
    fetchCardList(getScenes);
  }

  render() {
    const { scenes, isBusy } = this.props;
    if (isBusy) {
      return <Spin size="large" />;
    }

    return (
      <div className={s.cardWrapper}>
        {scenes.map((el) => (
          <Card key={el.id} number={el.number} title={el.title} />
        ))}
      </div>
    );
  }
}

CardContainer.contextType = firebaseContext;

const mapStateToProps = (state) => {
  return {
    scenes: state.cardList.payload || [],
    isBusy: state.cardList.isBusy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCardList: fetchCardList,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
