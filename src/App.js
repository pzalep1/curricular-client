import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js';

function App() {
  const apiUrl = 'http://localhost:3000';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  return ( [
    <Header />,
    <Homepage boxes = {["Intro text", "featured accreditations", "Curricular Coffee featured in Forbes top 10 new startups"]}/>,
    <Footer/>
  ]
  )
}

export default App;
