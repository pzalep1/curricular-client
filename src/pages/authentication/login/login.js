import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../shared/header/Header.js';
import Footer from '../../../shared/footer/Footer.js';
import './Login.css'


class Login extends React.Component {
    render() {
      return [
        <Header />,
        <main id = "loginPage">
            <div id = "loginForm">
            <form action="Homepage">
                <label for="fname" required><strong>Username</strong></label><br />              
                <input type="text" id="username"/><br/><br/>
                <label for="lname" required><strong>Password</strong></label><br />
                <input type="text" id="password"/><br/><br/>
                <div id = "loginButtonWrapper">  <input id = "loginButton" type="submit" value="Submit"/></div>
              
            </form>
            </div>
        </main>,
        <Footer />
      ]
    }
  }


export default Login;