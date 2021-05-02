import React, { Component } from "react";
import './styles/GuidelinesPopUp.css';
import ViewGuidelines from './ViewGuidelines';
export default class GuidelinesPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showing: false
    }
  }

  componentDidMount() {
    console.log("yeah");
    this.setState({showing: this.props.show});
  }

  handleClick = () => {
    this.props.toggle(this.props.fid);
  }

  render() {
    return (
      <div className = {this.props.show ? "guideline-modal" : "hidden-modal"}>
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