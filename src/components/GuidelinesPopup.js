import React, { Component } from "react";
import './styles/GuidelinesPopUp.css';
import ViewGuidelines from './ViewGuidelines';
export default class GuidelinesPopup extends Component {
  handleClick = () => {
    window.location.reload(window.location.href);
  };

  render() {
    return (
      <div className = {this.props.show ? "guideline-modal" : "hidden-modal"}>
        <div className="guidline-modal_content">
            <span className="guidline-close" onClick={this.handleClick}>
            {/* <span className="guidline-close" onClick={this.handleClick}> */}
            &times;
            </span>
            <ViewGuidelines framework={this.props.framework}/>
        </div>
      </div>
    );
  }
}