import React, { Component } from "react";
import Character from "../Character/Character";

import s from "./TeamContainer.module.css";

class TeamContainer extends Component {
  state = {
    team: "",
    name: "",
    nation: "",
  };

  handle1InputChange = (e) => {
    this.setState({
      team: e.target.value,
    });
  };

  handle2InputChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handle3InputChange = (e) => {
    this.setState({
      nation: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handlePush(this.state);
  };

  render() {
    const { team } = this.props;
    return (
      <div className={s.wrapper}>
        <div className={s.data}>
          <form onSubmit={this.handleOnSubmit}>
            <label>Введите название отряда:</label>
            <input type="text" onChange={this.handle1InputChange} />
            <label>Введите имя персонажа:</label>
            <input type="text" onChange={this.handle2InputChange} />
            <label>Введите расу персонажа:</label>
            <input type="text" onChange={this.handle3InputChange} />
            <button className={s.btn}>OK</button>
          </form>
        </div>
        <div className={s.team}>
          <h3>{team.name}</h3>
          {team.users.map(({ id, name, nation }) => {
            return (
              <Character
                key={id}
                id={id}
                name={name}
                nation={nation}
                deleteFunc={() => {
                  this.props.deleteItem(id);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TeamContainer;
