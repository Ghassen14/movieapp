import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Password: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ Password: e.target.value });
  };
  authentication = () => {
    for (var i = 0; i < this.state.email.length; i++) {
      if (this.state.email[i] == localStorage.getItem("email")[i]) {
        if (this.state.Password[i] == localStorage.getItem("password")[i]) {
          alert("Welcome dude");
        } else {
          alert("Go fo signup , are u fucking blind");
        }
      }
    }
    alert("Veuillez créer un compte");
  };

  render() {
    return (
      <div className="partcompteone">
        <form class="form">
          <label for="email" class="email">
            Adresse e-mail
          </label>
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
          <button
            class="btn"
            className="btncompte"
            onClick={this.authentication}
          >
            Se connecter
          </button>
        </form>
      </div>
    );
  }
}
