import React, { Component } from "react";
import "./Login.css";
import PropTypes from "prop-types";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }

  handleSubmit = () => {
    let route = "/home";
    if (this.state.name !== "" && this.state.password !== "")
      route += "?authenticated";
    this.props.history.push(route);
  };

  handleNameChange = (e) => this.setState({ name: e.target.value });

  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleSubmit();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="inputContainer">
          <h1>Авторизация</h1>
          <input placeholder="Логин" onChange={this.handleNameChange} />
          <input
            placeholder="Пароль"
            type="password"
            onChange={this.handlePasswordChange}
            onKeyDown={this.handleKeyDown}
          />

          <button onClick={this.handleSubmit}>Войти</button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};
