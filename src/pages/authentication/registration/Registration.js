import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../shared/header/Header.js';
import Footer from '../../../shared/footer/Footer.js';
import AuthService from '../../../service/authentication/auth-service.js';
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
      <main id = "registrationPage">
        <form onSubmit={this.handleSubmit}>
          <label>Full Name: 
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          </label><br/>
          <label>Organization: 
          <input
            type="text"
            value={this.state.organization}
            onChange={this.handleOrg}
          />
          </label><br/>
          <label>Email: 
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          </label><br/>
          <label>Password: 
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          </label><br/>
          <input type="submit" vlaue="Submit" />
        </form>
      </main>,
      <Footer />
    ]
  }
}


export default Register;