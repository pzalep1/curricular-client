import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './shared/header/Header.js';
import Footer from './shared/footer/Footer.js';
import Homepage from './pages/homepage/Homepage.js';
import Login from './pages/authentication/login/Login.js';
import Register from './pages/authentication/registration/Registration.js';

function App() {
  const apiUrl = 'http://localhost:3000';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  return ( [
    <Register />
    // <Header displayButtons = {false}/>,
    // <Homepage boxes = {["Intro text", "featured accreditations", "Curricular Coffee featured in Forbes top 10 new startups"]}/>,
    // <Footer/>
  ]
  )
}

export default App;
