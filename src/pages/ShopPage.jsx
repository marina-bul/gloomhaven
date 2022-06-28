import React, { Component } from "react";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";

class ShopPage extends Component {
  render() {
    return (
      <HeaderBlock
        title="Магазин"
        descr="Здесь Вы можете купить или продать снаряжение"
        hideBackground
      />
    );
  }
}

export default ShopPage;
