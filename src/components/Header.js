import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
      return <header id = "appHeader">
          <h1 id = "ccLogo">
            Curricular Coffee
          </h1>
          <div ></div>
          <div ></div>
          <div ></div>
          <div ></div>
          <div id = "headerButtons">
            <button id = "login">Login</button>
            <button id = "register">Register</button>
          </div>
      </header>
    }
  }

  export default Header;