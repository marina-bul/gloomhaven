import React, { Component } from "react";
import { DeleteOutlined } from "@ant-design/icons";

import s from "./Character.module.css";

class Character extends Component {
  handleOnDelete = () => {
    this.props.deleteFunc();
  };

  render() {
    const { name, nation } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.user}>
          <h4>{name}</h4>
          <span>{nation}</span>
        </div>
        <DeleteOutlined className={s.icon} onClick={this.handleOnDelete} />
      </div>
    );
  }
}

export default Character;
