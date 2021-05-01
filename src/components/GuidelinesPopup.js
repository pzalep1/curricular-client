import React, { Component } from "react";
import './styles/GuidelinesPopUp.css';
import ViewGuidelines from './ViewGuidelines';
export default class GuidelinesPopup extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="guideline-modal">
        <div className="guidline-modal_content">
            <span className="guidline-close" onClick={this.handleClick}>
            &times;
            </span>
            <ViewGuidelines framework={this.props.framework}/>
        </div>
      </div>
    );
  }
}