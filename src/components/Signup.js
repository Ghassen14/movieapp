import React, { Component } from "react";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      newEmail: "",
      newPassword: "",
    };
  }

  handleEmailChange = (e) => {
    localStorage.setItem("email", e.target.value);
    this.setState({ newEmail: e.target.value });
  };
  handlePasswordChange = (e) => {
    localStorage.setItem("password", e.target.value);
    this.setState({ newPassword: e.target.value });
  };
  render() {
    let email = localStorage.getItem("email");
    let pass = localStorage.getItem("password");

    return (
      <div className="partcomptetwo">
        <form class="form">
          <label for="email">E-mail</label>
          <input
            className="text-filter"
            type="email"
            id="email"
            onChange={this.handleEmailChange}
          />
          <label for="password">Mot de passe</label>
          <input
            className="text-filter"
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          />
          <button class="btn" className="btncompte">
            S'inscrire
          </button>
        </form>
      </div>
    );
  }
}
