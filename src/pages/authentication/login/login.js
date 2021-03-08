import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../shared/header/Header.js';
import Footer from '../../../shared/footer/Footer.js';
import './Login.css'


class Login extends React.Component {
    render() {
      return [
        <main id = "loginPage">
            <div id = "loginForm" class = "form">
            <form action="Homepage">
                <label for="fname" required><strong>Username</strong></label><br />              
                <input type="text" id="username"/><br/><br/>
                <label for="lname" required><strong>Password</strong></label><br />
                <input type="text" id="password"/><br/><br/>
                <input id = "loginButton" type="submit" value="Submit"/>
            </form>
            </div>
        </main>,
        <Footer />
      ]
    }
  }


export default Login;