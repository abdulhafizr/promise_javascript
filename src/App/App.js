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
    this.firstName()
      .then((response) => {
        return this.lastName(response);
      })
      .then((response) => {
        this.setState({
          name: response
        });
      });
  };

  firstName = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Abdul Hafiz");
      }, 2000);
    });
  };

  lastName = (firstName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${firstName} Ramadan`);
      }, 2000);
    });
  };
}
