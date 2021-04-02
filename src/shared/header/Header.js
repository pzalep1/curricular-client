import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './favicon.png';
import './header.css'
class Header extends React.Component {
    render() {
      let buttons;
      if (this.props.displayButtons) {
        buttons = [<Link to='/login'><button id = "login">Login</button></Link>,
        <button id = "register">Register</button>];
      } else {
        buttons = [<button id = "login"><Link to='/login' style={{ textDecoration: 'none', color: 'var(--main-color' }}>Login</Link></button>,
        <button id = "register"><Link to='/register' style={{ textDecoration: 'none', color: 'var(--main-color' }}>Register</Link></button>];
      }
      return <header id = "appHeader">
          <div>
            <Link to='/'><img id="logo" src={logo} alt="Curricular Coffee"/></Link>
          </div>
          <div id = "headerButtons">
              {buttons}
          </div>
      </header>
    }
  }

  export default Header;