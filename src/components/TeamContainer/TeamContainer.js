import React, { Component } from "react";
import Character from "./Character/Character";

import s from "./TeamContainer.module.css";

class TeamContainer extends Component {
  // handleInputChange2 = (e) => {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // };

  // handleInputChange3 = (e) => {
  //   this.setState({
  //     nation: e.target.value,
  //   });
  // };

  // handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.handlePush(this.state);
  // };

  // deleteItemFunc = (id) => {
  //   const { getTeamUsers } = this.context;
  //   const stateArr = this.props.users;
  //   const newStateArr = stateArr.filter((item) => item.id !== id);
  //   getTeamUsers().set({ users: newStateArr });
  // };

  // pushItemFunc = (item) => {
  //   const { getTeamUsers } = this.context;
  //   const { team, name, nation } = item;
  //   const stateArr = this.state.team.users;

  //   const newUser = {
  //     id: +new Date(),
  //     name: name,
  //     nation: nation,
  //   };
  //   getTeamUsers().set({
  //     name: team,
  //     users: [...stateArr, newUser],
  //   });
  // };

  render() {
    const { users } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.data}>
          <form onSubmit={this.handleOnSubmit}>
            <label>Введите имя персонажа:</label>
            <input type="text" onChange={this.handleInputChange2} />
            <label>Введите расу персонажа:</label>
            <input type="text" onChange={this.handleInputChange3} />
            <button className={s.btn}>OK</button>
          </form>
        </div>
        <div className={s.team}>
          {/* <h3>{team.name}</h3> */}
          {users.map(({ id, name, nation }) => {
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
