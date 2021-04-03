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
  
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
       
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("hit");
  }

  buttons() {
    let loggedIn;
    if (loggedIn) {
      return [<Link to='/login'><button id = "login">Login</button></Link>,<button id = "register">Register</button>];
    } else {
      return [<button id = "login"><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link></button>,
      <button id = "register"><Link to='/register' style={{ textDecoration: 'none', color: 'var(--main-color' }}>Register</Link></button>];
    }
  }

  render() { 
    return (
      <nav class="appHeader">
        <div class="logo">
          <Link to='/'><img id="logo" src={logo} alt="Curricular Coffee"/></Link>
        </div>
        <div class="buttons">
          {this.buttons()}
        </div>
      </nav>
    
    )
  }
}

  export default Header;