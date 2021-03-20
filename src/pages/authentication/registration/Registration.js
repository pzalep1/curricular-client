import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../shared/header/Header.js';
import Footer from '../../../shared/footer/Footer.js';
import AuthService from '../../../service/authentication/auth-service.js';
import './Registration.css'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        organization: "",
        password: "",
        email: ""
    }
    this.handleName = this.handleName.bind(this);
    this.handleOrg = this.handleOrg.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleOrg(event) {
    this.setState({organization: event.target.value});
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    AuthService.register(this.state);
    alert('Your Accounnt has been created!');
    event.preventDefault();
  }
  

  render() {
    return [
      <Header />,
      <main id = "registrationPage">
        <div id = "regForm">
          <form onSubmit={this.handleSubmit}>
            <label><strong>Full Name: </strong>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
            /><br />
            </label><br/>
            <label><strong>Organization: </strong>
            <input
              type="text"
              value={this.state.organization}
              onChange={this.handleOrg}
            /><br />
            </label><br/>
            <label><strong>Email: </strong><br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmail}
            /><br />
            </label><br/>
            <label><strong>Password:  </strong>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            /><br />
            </label><br/>
            <div id = "regButtonWrapper">
              <input id = "regButton" type="submit" value="Register" />
            </div>

          </form>
          </div>
      </main>,
      <Footer />
    ]
  }
}


export default Register;