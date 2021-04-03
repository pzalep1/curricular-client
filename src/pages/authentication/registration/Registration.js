import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthService from '../../../service/auth-service'
import './Registration.css'
import Logo from './favicon.ico'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "name": "",
        "organization": "",
        "password": "",
        "email": ""
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
  }
  

  render() {
    return [
      <div class="registrationPage">
        <img class="logo" src={Logo} alt="Curricular Coffee"/>
          <h1 class="registration-header">REGISTER</h1>
          <form>
            <fieldset class="input">
              <legend>Email</legend>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmail}
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
            <fieldset class="input">
              <legend>Full Name</legend>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleName}
                required
              />            
            </fieldset>
            <fieldset class="input">
              <legend>Organization</legend>
              <input
                type="text"
                value={this.state.organization}
                onChange={this.handleOrg}
                required
              />            
            </fieldset>
            <Link to="/" style={{ textDecoration: 'none', color: 'var(--main-color)'}}><input class="button" type="submit" value="Create" onClick={this.handleSubmit}/></Link>
          </form>
          <Link class="register" to="/login" style={{ textDecoration: 'none', color: 'var(--main-color)', textAlign: 'center'}}>Already have an account? Click Here!</Link>
        </div>      
    ]
  }
}


export default Register;