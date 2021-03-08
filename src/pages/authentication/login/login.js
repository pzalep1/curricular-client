import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../shared/header/Header.js';
import Footer from '../../../shared/footer/Footer.js';
class Login extends React.Component {
    render() {
      return [
        <main id = "loginPage">
            <div class = "form">
            <form action="Homepage">
                <label for="fname" required>Username:</label>
                <input type="text" id="username"/><br/><br/>
                <label for="lname" required>Passowrd:</label>
                <input type="text" id="password"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        </main>,
        <Footer />
      ]
    }
  }


export default Login;