import React, { Component } from "react";
import './styles/AuthPopUp.css';
import Authentication from './Authentication';

export default class AuthenticationPopup extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="auth-modal">
        <div className="auth-modal_content">
            <span className="close" onClick={this.handleClick}>
            &times;
            </span>
            <Authentication setToken={this.props.setToken}/>
        </div>
      </div>
    );
  }
}