import React, { Component } from "react";
import HeaderBlock from "../components/HeaderBlock/HeaderBlock";

class LibraryPage extends Component {
  render() {
    return (
      <HeaderBlock
        title="Городской архив"
        descr="Здесь вы найдете записи о бывших членах вашей команды. А может, местный библиотекарь даже поведает Вам полную историю Мрачной Гавани!"
        hideBackground
      />
    );
  }
}

export default LibraryPage;
