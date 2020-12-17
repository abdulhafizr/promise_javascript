import React, { Component } from "react";
import "./Style/App.scss";

export default class App extends Component {
  state = {
    name: "Anonymous"
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.changeName} className="btn">
          Login
        </button>
        <h2>{this.state.name}</h2>
      </div>
    );
  }

  changeName = async () => {
    const fName = await this.firstName();
    const lName = await this.lastName();
    const name = `${fName} ${lName}`;

    this.setState({
      name: name
    });
  };

  firstName = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Abdul Hafiz");
      }, 2000);
    });
  };

  lastName = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Ramadan");
      }, 2000);
    });
  };
}
