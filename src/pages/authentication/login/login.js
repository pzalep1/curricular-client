import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from '../../../shared/header/Header.js';
import Footer from '../../../shared/footer/Footer.js';
import './Login.css';
import Logo from './logo.png';
import AuthService from '../../../service/auth-service.js';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          "username": "",
          "password": ""
      }
      this.handleUsername = this.handleUsername.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUsername(event) {
      this.setState({username: event.target.value});
    }
  
    handlePassword(event) {
      this.setState({password: event.target.value});
    }

    handleSubmit(event) {
      AuthService.login(this.state);
    }

    render() {
      return [
        <div class="loginPage">
          <img class="logo" src={Logo} alt="Curricular Coffee"/>
          <h1 class="login-header">LOGIN</h1>
          <form>
            <fieldset class="input">
              <legend>Email</legend>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsername}
                required
              />
            </fieldset>
            <fieldset class="input">
              <legend>Password</legend>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePassword}
                required
              />            
            </fieldset>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--main-color)'}}><input class="button" type="submit" value="Sign In" onClick={this.handleSubmit}/></Link>
          </form>
          <Link class="register" to="/register" style={{ textDecoration: 'none', color: 'var(--main-color)', textAlign: 'center'}}>Need an account? Click Here!</Link>
        </div>
      ]
    }
  }


export default Login;

/*
<div id = "loginForm">
              <form>
                <label for="fname" required><strong>Username</strong></label><br />              
                <input type="text" id="username"/><br/><br/>
                <label for="lname" required><strong>Password</strong></label><br />
                <input type="text" id="password"/><br/><br/>
                
              </form>
            </div>
*/