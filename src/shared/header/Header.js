import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'

class Header extends React.Component {
    render() {
      let buttons;
      if (this.props.displayButtons) {
        buttons = [<button id = "login">Login</button>,
        <button id = "register">Register</button>];
      } else {
        buttons = <button id = "logout">Logout</button>;
      }
      return <header id = "appHeader">
          <h1 id = "ccLogo">
            Curricular Coffee
          </h1>
          <div ></div>
          <div ></div>
          <div ></div>
          <div ></div>
          <div id = "headerButtons">
              {buttons}
          </div>
      </header>
    }
  }

  export default Header;