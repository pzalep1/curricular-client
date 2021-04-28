import React, { Component } from "react";
import './styles/PopUp.css';
import Framework from './Framework';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
            <span className="close" onClick={this.handleClick}>
            &times;
            </span>
            <Framework/>
        </div>
      </div>
    );
  }
}