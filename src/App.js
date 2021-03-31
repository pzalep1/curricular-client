import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './shared/header/Header.js';
import Footer from './shared/footer/Footer.js';
import Homepage from './pages/homepage/Homepage.js';
import Login from './pages/authentication/login/Login.js';
import Register from './pages/authentication/registration/Registration.js';
import FrameworkBuilder from './pages/framework-builder/FrameworkBuilder.js';
import GuidelineBuilder from './pages/framework-builder/GuidelineBuilder.js';

function App() {
  const apiUrl = 'http://localhost:3000';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  return ( 
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/frameworkbuilder">
            <FrameworkBuilder/>
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
    
    //<FrameworkBuilder />
    // <Header displayButtons = {false}/>,
    // <Homepage boxes = {["Intro text", "featured accreditations", "Curricular Coffee featured in Forbes top 10 new startups"]}/>,
    // <Footer/>
  
  )
}

export default App;
