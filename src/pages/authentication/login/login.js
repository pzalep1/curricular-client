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
        <Header />,
        <main id = "loginPage">
          <form>
            <label><strong>Username </strong>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
              required
            /><br />
            </label><br/>
            <label><strong>Password </strong>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
              required
            /><br />
            </label><br/>
            <Link to="/" role="button"><input id = "regButton" type="submit" value="Login" onClick={this.handleSubmit}/></Link>
            <Link to="/register">Need an account? Click Here!</Link>
          </form>
            
        </main>,
        <Footer />
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