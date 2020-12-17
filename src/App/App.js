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

  changeName = () => {
    Promise.all([this.firstName(), this.lastName()]).then(
      ([firstName, lastName]) => {
        const name = `${firstName} ${lastName}`;
        this.setState({
          name: name
        });
      }
    );
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
